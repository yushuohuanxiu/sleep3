function sleep(time) {
    let ms = 0;
    if (typeof time == 'string') {
        const timeArray = time.split(/(\d+)/);
        for (let i = 1; i < timeArray.length; i += 2) {
            if (timeArray[i + 1] === "s") {
                ms += parseInt(timeArray[i]) * 1000;
            } else if (timeArray[i + 1] === "m") {
                ms += parseInt(timeArray[i]) * 60 * 1000;
            } else if (timeArray[i + 1] === "h") {
                ms += parseInt(timeArray[i]) * 60 * 60 * 1000;
            } else if (timeArray[i + 1] === "d") {
                ms += parseInt(timeArray[i]) * 24 * 60 * 60 * 1000;
            }
        }
    } else {
        ms = time;
    }
    return new Promise(resolve => setTimeout(resolve, ms, ms));
}

module.exports = sleep;
