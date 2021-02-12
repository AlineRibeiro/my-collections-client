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
import { Session } from "../../api/Session";
import { loadUser } from "./userSlice";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = SignFormStyles();

  const handleClose = () => {
    setErrorAlert(false);
  };

  const displayError = () => {
    return (
      <Alert onClose={handleClose} severity="error">
        {messageError}
      </Alert>
    );
  };

  const fetchUserCreate = (event) => {
    event.preventDefault();
    const requestBody = {
      user: { email, password },
    };

    Session.create(requestBody).then((response) => {
      if (!response.error) {
        dispatch(loadUser(response));
        alert("You are logged in");
        history.push("/companies");
      } else {
        setMessageError(response.error);
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
          Login
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
            Login
          </Button>
          {errorAlert && displayError()}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/users" variant="body2">
                {"Don't have an account? Register now!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
