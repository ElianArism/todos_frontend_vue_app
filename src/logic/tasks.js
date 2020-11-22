// << Peticiones al Backend >>

// imports necesarios
import axios from 'axios'
import api from '../../env'

export default {
    // GET 
    getTasks () {
        return axios.get(`${api}/task`); 
    },

    getFeaturedTasks () {
        return axios.get(`${api}/featured`);
    },

    // POST 
    postTask (task) {
        return axios.post(`${api}/task`, task); 
    },
    
    // PUT 
    putTask (data, id) {
        return axios.put(`${api}/task/${id}`, data);
    },

    // DELETE
    deleteTask (id) {
        return axios.delete(`${api}/task/${id}`);  
    }
}