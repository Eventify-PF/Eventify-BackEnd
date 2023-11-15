const { Comments } = require("../../db")

const getComments = async () => {
    expiredEvents();
    const events = await Comments.findAll()
}

module.exports = { getComments }