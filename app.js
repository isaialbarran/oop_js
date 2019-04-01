function stopWatch(){

    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running)
        throw new Error('Watch already started');

        running = true;
        startTime = Date.now();
        console.log(startTime);
    };

    this.stop = function(){
        if(!running)
        throw new Error ('Watch is not running yet');

        endTime = Date.now();
        console.log(endTime);
    };

    this.duration = function(){
        duration = (endTime - startTime) / 1000;
        console.log(duration);
    }

    this.reset = function(){
        running = false;
        startTime = null;
        endTime = null;
        duration = 0;
    };

}
