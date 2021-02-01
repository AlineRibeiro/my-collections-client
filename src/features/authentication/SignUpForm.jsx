import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Alert from "@material-ui/lab/Alert";

import SignFormStyles from "./SignFormStyles";
import { loadUser } from "./userSlice";
import { User } from "../../api/User";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState({});
  const [errorAlert, setErrorAlert] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = SignFormStyles();

  const handleClose = () => {
    setErrorAlert(false);
  };

  const displayError = (messageError) => {
    const entries = Object.entries(messageError);
    const errors = [];
    for (const [key, value] of entries) {
      errors.push(`The ${key} is ${value}. `);
    }

    const errorItems = errors.map((error) => (
      <Alert
        onClose={handleClose}
        severity="error"
        style={{ marginTop: "10px" }}
      >
        <div> {error} </div>
      </Alert>
    ));

    return errorItems;
  };

  const fetchUserCreate = (event) => {
    event.preventDefault();

    const requestBody = {
      user: { email, password },
    };

    User.create(requestBody).then((response) => {
      console.log(response);
      if (!response.errors) {
        dispatch(loadUser(response));
        alert("Your user has been created");
        history.push("/collections");
      } else {
        setMessageError(response.errors);
        setErrorAlert(true);
      }
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate onSubmit={fetchUserCreate}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          {errorAlert && displayError(messageError)}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/sign-in" variant="body2">
                {"Already have an account? Login!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
