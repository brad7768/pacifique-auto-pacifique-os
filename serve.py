"""Serve Pacifique Auto locally with no-cache headers (évite une vieille page en cache)."""
from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

PORT = 8888
ROOT = os.path.dirname(os.path.abspath(__file__))


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        super().end_headers()


if __name__ == "__main__":
    os.chdir(ROOT)
    with HTTPServer(("", PORT), Handler) as httpd:
        print(f"Pacifique Auto: http://127.0.0.1:{PORT}/index.html")
        print("Appuyez sur Ctrl+C pour arrêter.")
        httpd.serve_forever()
