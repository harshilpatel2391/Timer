const durationInput = document.body.querySelector("#duration");
const startButton = document.body.querySelector("#start");
const pauseButton = document.body.querySelector("#pause");

const circle = document.body.querySelector('circle');
const perimeter = 2 * Math.PI * circle.getAttribute('r');
let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        circle.setAttribute('stroke-dasharray', perimeter);

    },
    onTick(timeRemaining) {
        circle.setAttribute(
            'stroke-dashoffset',
            (perimeter * timeRemaining) / duration - perimeter
          );
    },
    onComplete() {

    }
});