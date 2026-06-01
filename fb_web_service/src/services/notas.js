import axios from 'axios'
const API_URL = import.meta.env.API_URL || 'http://localhost:3001/api'

const getNotasEstudiantes = async(body) => {
    try {
        const id = parseInt(body);
        const response = await axios.post(API_URL + '/notes', {id: id})
        return response.data;
    } catch (error) {
        console.error('Error al obtener las notas de los estudiantes:', error);
        throw error;
    }
}

export default getNotasEstudiantes
