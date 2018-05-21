
// insert good deed
function addGooddeeds (gooddeeds, db) {
    return db('gooddeeds')
    .insert(gooddeed)
}
//get all good deeds by ID
function getGooddeedsByUserId (user_id, db) {
    return db('gooddeeds')
    .select()
    .where('user_id', user_id)
    .orderBy('id', 'desc')
}
//get a good deed 
function getGooddeedById (id, db) {
    return db('gooddeeds')
    .select()
    .where('id', id)
}
//delete a good deed
function deleteGooddeedById (id, db) {
    return db('gooddeeds')
    .select()
    .where('id', id)
    .delete()
}


module.exports = {
    addGooddeeds,
    getGooddeedsByUserId,
    getGooddeedById,
    deleteGooddeedById
}
