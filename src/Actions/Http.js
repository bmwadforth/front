import axios from "axios";

if(process.env.NODE_ENV === "production") {
    axios.defaults.baseURL = "https://bmwadforth.com";
} else {
    axios.defaults.baseURL = "http://localhost:8080";
}

export default axios;