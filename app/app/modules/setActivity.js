module.exports.setActivity = (client, type, desc) => {
    if(!type) {type = "WATCHING"};
    if(!desc) {desc = "saved posts 🔖"};
    try {
        client.user.setActivity(desc, {type: type});
    } catch (error) {
        throw error;
    }
}