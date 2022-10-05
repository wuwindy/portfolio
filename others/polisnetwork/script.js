// const anlottie = lottie.loadAnimation({
//     container: svgContainer,
//     animType: 'svg',
//     loop: true,
//     autoplay: false,
//     path: 'data.json',
// });


var animations = ['herobanner', 'features1', 'features2', 'features3',  'features4', 'features5', 'features6', 'pricing-free', 'pricing-pro', 'startbussiness'];
var i, len = animations.length;
for (i = 0; i < len; i += 1) {
    var anim;
    var elem = document.getElementById(animations[i])
    var animData = {
        container: elem,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        rendererSettings: {
            progressiveLoad: true,
            preserveAspectRatio: 'xMidYMid meet'
        },
        path: 'https://wuwindy.github.io/portfolio/others/polisnetwork/' + animations[i] + '.json'
    };
    anim = lottie.loadAnimation(animData);
    anim.setSubframe(false);
}


// anlottie.setSpeed(10);
// anlottie.play();

// function play() {
//   anlottie.play();
// }

// function stop() {
//   anlottie.pause();
// }