const durationInput = document.body.querySelector("#duration");
const startButton = document.body.querySelector("#start");
const pauseButton = document.body.querySelector("#pause");
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {

    },
    onTick() {

    },
    onComplete() {

    }
});