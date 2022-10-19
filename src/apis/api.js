import axio from "axio"

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})

export default api;