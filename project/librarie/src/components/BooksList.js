import React from 'react';
import NavBar from './NavBar';

function BooksList() {
    const [booksList, setBooksList] = React.useState([]);

    React.useEffect(() => {
        let url = "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
        fetch(url)
        .then(response => response.json())
        .then(resp => setBooksList(resp))
    },[]);

    return (
    <div>
        <NavBar />
        <div>{booksList.map((v,i)=>{
            return (<div>
                    <div>{v.title}</div>
                    <div>{v.releaseDate}</div>
                    </div>)
        })}</div>
    </div>
    )
}

export default BooksList;