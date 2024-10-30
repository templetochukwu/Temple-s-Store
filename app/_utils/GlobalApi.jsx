const { default: axios } = require("axios");

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api'
})

const getCategory=()=>axiosClient.get('/category1s?populate=*');

export default{
    getCategory
}