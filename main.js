var typed2 = new Typed('#animate', {
  strings: ['A Digital Software Company'],
  typeSpeed: 60,
  backSpeed: 40,
  smartBackspace: true,
  loop: true,
});

// Images mouseover
window.onload = function () {
  let wrapper = document.querySelector('body'),
    yellow = document.querySelector('.yellow'),
    halfpink = document.querySelector('.half-pink'),
    blue = document.querySelector('.blue'),
    green = document.querySelector('.green'),
    pink = document.querySelector('.pink'),
    halfgreen = document.querySelector('.half-green');

  wrapper.addEventListener('mousemove', function (e) {
    let pageX = e.clientX;
    let pageY = e.clientY;
    yellow.style.transform =
      'translateX(' +
      (pageX * -1) / 200 +
      '%) translateY(' +
      (pageY * -1) / 60 +
      '%)';
    halfpink.style.transform =
      'translateX(' +
      (pageX * -1) / 40 +
      '%) translateY(' +
      (pageY * -1) / 10 +
      '%)';
    blue.style.transform =
      'translateX(' +
      (pageX * -1) / 200 +
      '%) translateY(' +
      (pageY * -1) / 100 +
      '%)';
    green.style.transform =
      'translateX(' +
      (pageX * -1) / 100 +
      '%) translateY(' +
      (pageY * -1) / 30 +
      '%)';
    pink.style.transform =
      'translateX(' +
      (pageX * -1) / 120 +
      '%) translateY(' +
      (pageY * -1) / 70 +
      '%)';
    halfgreen.style.transform = 'translateY(' + (pageY * -1) / 10 + '%)';
  });
};
