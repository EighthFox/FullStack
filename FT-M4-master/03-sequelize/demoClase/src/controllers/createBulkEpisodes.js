const { Episode } = require('../db');

const createBulkEpisodes = async (episodes) => {
    const newEpisodes = await Episode.bulkCreate(episodes);
    return newEpisodes;
};

module.exports = createBulkEpisodes;