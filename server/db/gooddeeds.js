
// insert good deed
function addGooddeeds (gooddeeds, db) {
    return db('gooddeeds')
    .insert(gooddeeds)
}


module.exports = {
    addGooddeeds
}
