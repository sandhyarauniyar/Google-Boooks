import {useState} from 'react';
import Books from './Books';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Search(){

    const [input,setInput] = useState("");
    const [response,setResponse] = useState("");
    const [api,setAPI] = useState("AIzaSyCjQpQbzMVTYFXnjV1s3w5Yz3H3kSYFvg0");
    const navigate = useNavigate();

    const handleClick = async () => {
        const url = "https://www.googleapis.com/books/v1/volumes?q="+ input +"&key="+ api;
        const res = await axios.get(url);
        console.log(res);  
        setResponse(res);
    }

    return (
        <div>
        <input type = "text" placeholder='Search Here' 
        onChange = {(event) => setInput(event.target.value)}/>

        <button onClick= {handleClick}>Search</button>

        {response && <Books response= {response}/>} 
        </div>
    );
}