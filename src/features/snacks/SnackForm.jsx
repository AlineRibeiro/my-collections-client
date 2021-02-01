import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { Button, Container, TextField, Typography } from "@material-ui/core";

import SignFormStyles from "../authentication/SignFormStyles";
import { Snack } from "../../api/Snacks";

export default function SnackForm() {
  const [messageErrors, setMessageErrors] = useState([]);
  const [errorAlert, setErrorAlert] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const classes = SignFormStyles();
  const history = useHistory();

  const handleClose = () => {
    setErrorAlert(false);
  };

  const displayError = (errors) => {
    return errors.map((error) => (
      <Alert
        onClose={handleClose}
        severity="error"
        style={{ marginTop: "10px" }}
      >
        <div> {error} </div>
      </Alert>
    ));
  };

  const fetchSnackCreate = (event) => {
    event.preventDefault();
    const requestBody = {
      snack: { name, description },
    };

    Snack.create(requestBody).then((response) => {
      if (!response.errors) {
        alert("You created a snack");
        history.push("/snacks");
      } else {
        setMessageErrors(response.errors);
        setErrorAlert(true);
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create a Snack
        </Typography>
        <form className={classes.form} noValidate onSubmit={fetchSnackCreate}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Snack Name"
            name="name"
            autoFocus
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="Description"
            label="Description"
            id="description"
            onChange={(event) => setDescription(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
          {errorAlert && displayError(messageErrors)}
        </form>
      </div>
    </Container>
  );
}
