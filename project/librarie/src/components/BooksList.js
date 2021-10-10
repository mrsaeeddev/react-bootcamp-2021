import React from 'react';
import NavBar from './NavBar';
import { Table} from 'react-bootstrap';

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
        <div>
        <br />
        <h3>Books Listing</h3>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Pages</th>
      <th>Release Date</th>
    </tr>
  </thead>
  <tbody>{booksList.map((v,i)=>{
            return (
    <tr>
      <td>{i+1}</td>
      <td>{v.title}</td>
      <td>{v.pages}</td>
      <td>{v.releaseDate}</td>
    </tr>)})}
    </tbody>
</Table>
    </div>
    </div>
    )
}

export default BooksList;