import axios from "axios";

const data = axios.create({
    baseURL: "http://localhost:5000/",
    timeout:15000,
});

export {data};