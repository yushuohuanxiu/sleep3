function sleep(time) {
    let ms;
    if (typeof time == 'string') {
        const num = Number(time.slice(0, -1));
        const unit = time.slice(-1);
        if (unit == 's') {
            ms = num * 1000;
        } else if (unit == 'm') {
            ms = num * 60 * 1000;
        } else if (unit == 'h') {
            ms = num * 60 * 60 * 1000;
        } else if (unit == 'd') {
            ms = num * 24 * 60 * 60 * 1000;
        }
    } else {
        ms = time;
    }
    return new Promise(resolve => setTimeout(resolve, ms, ms));
}

module.exports = sleep;
