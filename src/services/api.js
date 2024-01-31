import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-ob7z.onrender.com"
});
