import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addSmurf} from '../actions/smurfAction';
import { connect } from 'react-redux';




const ListForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    


    const handleChange = event => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value,
            [event.target.age]: event.target.value,
            [event.target.height]: event.target.value
        });
    };

    const submitForm = (event) => {
        event.preventDefault();
            const newSmurf = {
                ...smurf,
            };
            props.addSmurf(newSmurf)
            setSmurf({name: "", age: "", height: ""})
        }    

    return(
        <Form onSubmit ={submitForm}> 
            <FormGroup>
                <Label for="exampleName">Name</Label>
                <Input onChange={handleChange} type="text" name="name" id="exampleName" placeholder="Name" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleAge">Age</Label>
                <Input onChange={handleChange} type="text" name="age" id="exampleAge" placeholder="Age" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleHeight">Height</Label>
                <Input onChange={handleChange} type="text" name="height" id="exampleHeight" placeholder="Height" />
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
    );
};    

const mapStateToProps = state => {
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (mapStateToProps, { addSmurf })(ListForm);


