import react from 'react';
import { useLocation} from 'react-router-dom';
import BookViewer from './BookViewer';
import BookView from './BookView';

export default function Details(){

    const {state} = useLocation();
    const { resp } = state; 
    console.log("Image1");
    console.log(resp);
    const detail = resp;
    console.log("Image");
    console.log(detail.pageCount);
    console.log(detail.imageLinks.thumbnail);
   // const store = createStore();
    return (
        <div>
             <img src = {detail.imageLinks.thumbnail}/> 
            <div>{detail.title}</div>
            <div>{detail.authors}</div>
            <div>{detail.pageCount}</div>
                {/* <BookViewer/> */}
        </div>
    );
}