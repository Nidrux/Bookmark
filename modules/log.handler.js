const logger = (str, type) => {
    if(!type instanceof String) throw "Given type is not a string";

    let d = new Date();
    let hours = d.getHours() < 10 ? "0"+d.getHours() : d.getHours();
    let minutes = d.getMinutes() < 10 ? "0"+d.getMinutes() : d.getMinutes();
    let sec = d.getSeconds() < 10 ? "0"+ d.getSeconds() : d.getSeconds();

    let time = `\u001b[47;1m\u001b[47;1m ${hours}:${minutes}:${sec} \u001b[0m`

    switch(type.toLowerCase()) {
        case "info":
            console.log(time +"\u001b[44;1m INFO \u001b[0m "+ str) // BRIGHT BLUE
            break;
            case "warn":
                console.log(time +"\u001b[43;1m WARN \u001b[0m "+ str) // BRIGHT YELLOW
                break;
                case "error":
                    console.error(time +"\u001b[41;1m ERRO \u001b[0m "+ str) // BRIGHT RED
                    break;
        default:
            console.log(time +"\u001b[44;1m ? \u001b[0m "+ str)
            break;
    }
}
module.exports.logger = logger;