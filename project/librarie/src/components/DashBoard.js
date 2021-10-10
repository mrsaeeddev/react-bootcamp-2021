import { Button, Container, Row, Col }  from 'react-bootstrap';
import React from 'react';
import NavBar from './NavBar';
import { useHistory } from "react-router-dom";

function DashBoard() {

    let history = useHistory();

    function handleClick() {
        history.push('/listing')
    }

    return (
        <div>
            <NavBar />
            <Container className="pt-5">
            <Row className="justify-content-md-center">
            <Col xs lg="2">
                <Button onClick={handleClick}>View Books</Button>
            </Col>
            <Col md="auto"></Col>
            <Col xs lg="2">
                <Button>View Authors</Button>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default DashBoard;