const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
let cnt = 0;

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
    }
    else
    {
        window.alert("Chalu toh hai Lund k");
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        elapsedTime = Date.now() - startTime;
        clearInterval(timer);
    }
    else{
        window.alert("bhn k lund ek baar me ho jata h bnd");
    }
}

function reset() {
    cnt++;
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";

    if(cnt > 1)
    {
        window.alert("Tu nhi manega madarchod!!!");
        cnt = 0;
    }
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let seconds = Math.floor(elapsedTime / (1000)) % 60;
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milliseconds = milliseconds.toString().padStart(2, 0);
    const watch = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    display.textContent = watch;
}
