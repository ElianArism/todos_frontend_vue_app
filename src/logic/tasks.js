import axios from 'axios'
const api = 'http://localhost:3000';

export default {
    getTasks () {
        return axios.get(`${api}/task`); 
    },
    
    postTask (task) {
        return axios.post(`${api}/task`, task); 
    },
    
    putTask (data, id) {
        return axios.put(`${api}/task/${id}`, data);
    },

    deleteTask (id) {
        return axios.delete(`${api}/task/${id}`);  
    }, 

    getFeaturedTasks () {
        return axios.get(`${api}/featured`);
    },
    getFinishedTasks () {
        return axios.get(`${api}/finished`);
    }

}