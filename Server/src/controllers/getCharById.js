const URL = "https://rickandmortyapi.com/api/character/"
const axios = require('axios');

const getCharById = async (req, res)=> {
    try {
        const { id } = req.params;
        const { data } = await axios.get(`${URL}${id}`)
        console.log('aqui entra', data);

        if(!data.name) throw new Error(`Faltan datos de Character de ID: ${id}`)
    
            const character = {
                id: data.id, 
                name: data.name,
                status: data.status,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image
            }
            return res.status(200).json(character) 
    
    } catch (error) {
        // console.log(error.message);
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
        
    }
} 



module.exports = {
    getCharById
}










