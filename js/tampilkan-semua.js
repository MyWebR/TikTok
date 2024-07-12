document.addEventListener('DOMContentLoaded', function() {
  const btnMengikuti = document.getElementById('mengikuti');
  const btnPengikut = document.getElementById('pengikut');
  const btnDisarankan = document.getElementById('disarankan');

  const contentMengikuti = document.getElementById('content-mengikuti');
  const contentPengikut = document.getElementById('content-pengikut');
  const contentDisarankan = document.getElementById('content-disarankan');

  btnMengikuti.addEventListener('click', function() {
    setActive(btnMengikuti, contentMengikuti);
  });

  btnPengikut.addEventListener('click', function() {
    setActive(btnPengikut, contentPengikut);
  });

  btnDisarankan.addEventListener('click', function() {
    setActive(btnDisarankan, contentDisarankan);
  });

  function setActive(button, content) {
    document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.content-mengikuti, .content-pengikut, .content-disarankan').forEach(ct => ct.classList.remove('active'));
    button.classList.add('active');
    content.classList.add('active');
  }

  // Set default active content
  setActive(btnDisarankan, contentDisarankan);

  // Baca parameter URL
  const urlParams = new URLSearchParams(window.location.search);
  const viewParam = urlParams.get('view');

  if (viewParam) {
    if (viewParam === 'mengikuti') {
      setActive(btnMengikuti, contentMengikuti);
    } else if (viewParam === 'pengikut') {
      setActive(btnPengikut, contentPengikut);
    } else if (viewParam === 'disarankan') {
      setActive(btnDisarankan, contentDisarankan);
    }
  }
});

// nav
document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  const nav = document.querySelector('.nav');
  const headerOffsetTop = header.offsetTop;
  const navOffsetTop = nav.offsetTop;

  window.addEventListener('scroll', function() {
    if (window.pageYOffset > headerOffsetTop) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }

    if (window.pageYOffset > navOffsetTop - header.offsetHeight) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }
  });
});


// pencarian akun
