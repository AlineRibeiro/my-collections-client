import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

import SignFormStyles from "./SignFormStyles";
import { Session } from "../../api/Session";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);

  let history = useHistory();

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
      console.log(response);
      if (!response.error) {
        alert("You are logged in");
        history.push("/snacks");
      } else {
        setMessageError(response.error);
        setErrorAlert(true);
      }
    });
  };

  const classes = SignFormStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
