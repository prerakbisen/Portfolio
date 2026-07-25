const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    });

    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('show');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
      let current = 'home';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 145;
        if (window.scrollY >= sectionTop) current = section.getAttribute('id');
      });

      navItems.forEach(item => {
        item.classList.toggle('active', item.getAttribute('href') === '#' + current);
      });
    });

    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2800);
      form.reset();
    });
