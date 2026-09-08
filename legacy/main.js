/* Banner */
  function closeBanner() {
    const bar = document.getElementById('teaserBar');
    bar.style.display = 'none';
    document.getElementById('navbar').style.top = '0';
    document.getElementById('navbar').classList.add('bar-hidden');
    const mob = document.getElementById('mobileMenu');
    mob.style.top = '72px';
  }

  /* Navbar scroll */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  /* Hamburger */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobileMenu');
  ham.addEventListener('click', () => mob.classList.toggle('open'));
  document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mob.classList.remove('open')));

  /* Reveal */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) setTimeout(() => entry.target.classList.add('visible'), i * 80);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* Form */
  function handleSubmit(e) {
    e.preventDefault();
    const btn = e.target;
    const name = document.getElementById('prenom').value;
    const service = document.getElementById('service').value;
    if (!name || !service) {
      btn.textContent = '⚠ Remplissez les champs requis';
      btn.style.background = '#555';
      setTimeout(() => { btn.textContent = 'Envoyer ma demande →'; btn.style.background = ''; }, 2500);
      return;
    }
    const msg = encodeURIComponent(`Bonjour Pacifique Auto,\nJe m'appelle ${name} et je suis intéressé par : ${service}.\n\nMerci de me contacter.`);
    window.open(`https://wa.me/237696651116?text=${msg}`, '_blank');
    btn.textContent = '✓ Envoyé avec succès !';
    btn.style.background = '#27ae60';
    setTimeout(() => { btn.textContent = 'Envoyer ma demande →'; btn.style.background = ''; }, 4000);
  }
