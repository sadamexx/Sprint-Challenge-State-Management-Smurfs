import React from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Col} from 'reactstrap';

const Villagers = props => {
    return (
        <Col xs="12" s="6" md="3">
            {props.smurf.map(villager => (
                <Card className="card-main" key={villager.id}>
                    <CardImg
                        top
                        width="100%"
                        src="https://img.kpopmap.com/2019/01/check-out-5-beautiful-song-covers-by-exo-02.jpg"
                        alt="Exo Team Pic"
                    />
                    <CardBody className="card-container">
                        <CardTitle className="smurf-title">Your Friendly Smurf</CardTitle>
                        <CardText>Name: {villager.name}</CardText>
                        <CardText>Age: {villager.email}</CardText>
                        <CardText>Height: {villager.role}</CardText>                        
                    </CardBody>
                </Card>    
            ))}
        </Col>
    );
};

export default Members;