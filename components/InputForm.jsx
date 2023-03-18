import HomeStyles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Swal from "sweetalert2";
import { useState } from "react";

import { Container } from "@mui/material";
import { TextField } from "@mui/material";

export default function InputForm(props) {
  let [name, setName] = useState({ firstName: "", lastName: "" });

  function handleFirtNameChange(event) {
    setName({ ...name, firstName: event.target.value });
  }
  function handleLastNameChange(event) {
    setName({ ...name, lastName: event.target.value });
  }
  function handleFormSubmission(event) {
    event.preventDefault();
    console.log(name)
    if(!name.firstName || !name.lastName){
      Swal.fire({
        title: 'Skyler is bich',
        text: 'Yo, enter your name its not rocket science yo',
        icon: 'error',
        confirmButtonText: 'Okay My bad'
      })
    }else{
      props.fun(name);
    }
  
  }
  return (
    <Container maxWidth="md" className={HomeStyles.homeContainer}>
      <form onSubmit={handleFormSubmission}>
        <TextField
          className={HomeStyles.textInput}
          label="First Name"
          color="secondary"
          placeholder="Breaking"
          onChange={handleFirtNameChange}
       
        />
        <TextField
          className={HomeStyles.textInput}
          label="Last Name"
          color="secondary"
          placeholder="Bad"
          onChange={handleLastNameChange}
     
        />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Generate
        </Button>
      </form>
    </Container>
  );
}
