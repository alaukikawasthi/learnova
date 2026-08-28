// Hamburger menu
  var hamburger = document.getElementById('hamburger');
  var primaryNav = document.getElementById('primaryNav');
  hamburger.addEventListener('click', function(){
    var isOpen = primaryNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  primaryNav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      primaryNav.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('is-visible'); });
  }

  // Enroll form — demo confirmation only, no real submission
  var enrollForm = document.getElementById('enrollForm');
  var formConfirm = document.getElementById('formConfirm');
  enrollForm.addEventListener('submit', function(e){
    e.preventDefault();
    formConfirm.classList.add('show');
  });
