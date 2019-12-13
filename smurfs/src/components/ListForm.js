import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Axios from 'axios';

const ListForm = () => {
    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    const handleChange = event => {
        setSmurf({
            ...smurf,
            [event.target.name]:[event.target.value]
        });
    };

    const handleSubmit = () => {
        
        Axios.post("http://localhost:3333/smurfs", smurf)
        .then(response =>
            console.log(response))
            setSmurf(...smurf,); 
        .catch(err => console.log(err))
           
    }//move to smurfaction , add action types, of ADD_SMURF_START

    return(
        <Form>
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
            <Button onSubmit={handleSubmit}>Submit</Button>
        </Form>
    );
}

export default ListForm;