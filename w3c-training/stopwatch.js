function Stopwatch() {
    let startTime = 0;
    let endTime = 0;
    let running = false;
    let duration = 0;

    this.start = function () {
        if (running) {
            throw new Error('Stopwatch has already started');
        }
        startTime = new Date();
        running = true;
    };

    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch is not started');
        }
        running = false;
        endTime = new Date();
        console.log(new Date().getTime());
        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}


let sw = new Stopwatch();