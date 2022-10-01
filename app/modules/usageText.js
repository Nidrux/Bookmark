const usageText = (activeEmote) => {
    return `Bookmark works with reactions. 
    React to a message with the emote "${activeEmote}" to save a message/attachment as a bookmark. Bookmark will send you a dm with a link to the original message and attachements if there are any.
    Bookmark will also auto detect nswf and spoiler it for you.
    
    **Make sure you allow dm's to be able to recieve bookmarked messages!**
    `
}
module.exports.usageText = usageText;