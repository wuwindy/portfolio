const anlottie = lottie.loadAnimation({
  container: svgContainer,
  animType: 'svg',
  loop: true,
  autoplay: false,
  path: 'data.json',
});
  
// anlottie.setSpeed(10);
anlottie.play();

// function play() {
//   anlottie.play();
// }

// function stop() {
//   anlottie.pause();
// }