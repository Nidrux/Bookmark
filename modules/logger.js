const logger = {
    info(string) {
        console.log(`\u001b[44;1m\u001b[37mINFO:\u001b[0m ${string}`);
    },
    warning(string) {
        console.log(`\u001b[43;1m\u001b[30mWARN:\u001b[0m ${string}`);
    },
    error(string) {
        console.log(`\u001b[41;1m\u001b[37mERR:\u001b[0m ${string}`);
    }

}

module.exports = logger;