const getStatistics = async (client) => {
    const guilds = client.guilds.cache.size;
    const channels = client.channels.cache.size;
    return `Guilds: ${guilds}\nChannels: ${channels}`
}

module.exports = getStatistics;