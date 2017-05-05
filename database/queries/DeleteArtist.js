const Artist = require('../models/artist');

/**
 * Deletes a single artist from the Artists collection
 * @param {string} _id - The ID of the artist to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = (_id) => {
    //console.log(artistProps);    
    return Artist.remove({_id});
    
    /*  Esta solucion es peor, por que hace dos query
        return Artist.findById(_id)
            .then((artist)=> artist.remove());
    */
};
