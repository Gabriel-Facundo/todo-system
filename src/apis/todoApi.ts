import axios from "axios";

export const TODO_API = axios.create({
    //baseURL: "https://61a14c296c3b400017e69caf.mockapi.io/"
    baseURL: "http://localhost:8000"
});
