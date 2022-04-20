import {useState} from 'react';
import { useNavigate} from 'react-router-dom';

export default function Books({response}){
    //console.log("hjsnf");
    const [data,setData] = useState("");
    const navigate = useNavigate();

    console.log(response.data.items[0].volumeInfo.imageLinks.thumbnail);
    const res = response.data.items;
    console.log("res");
    console.log(res);

    const handleClick = (ans) =>{
        setData(ans);
    }

    return (
        <div>
           {
               res.map( (book) => (
                    <img key={book.id} src = {book.volumeInfo.imageLinks.thumbnail} alt = "image" onClick={() =>{handleClick(book.volumeInfo)} } />
               ))
           }
        
           {data != "" && navigate('/details', {state :{ resp : data } })} 

        </div>
    );
}