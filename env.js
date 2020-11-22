let api;
if(process.env.NODE_ENV)  {
    api = 'https://todosvuebackend.herokuapp.com'; 
} else {
    api = 'http://localhost:8080/'; 
}

export default api; 