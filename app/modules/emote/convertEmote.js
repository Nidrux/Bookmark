module.exports = (e) => {
    /* Convert Emoji to UNICODE string. */
    return [...e].map(e => e.codePointAt(0).toString(16)).join(`-`)
}