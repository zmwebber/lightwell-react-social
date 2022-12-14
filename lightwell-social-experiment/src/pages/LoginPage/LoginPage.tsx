import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Login from "../../components/LoginComponent/Login";
import "./loginPageStyle.css";
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, SvgIcon, TextField, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";

const LoginButton: any = styled(Button)`
	font-weight: bold;
	border-radius: 20px;
	padding: 8px 18px;
	width: 520px;
	shape = RoundedCornerShape(50, 50, 50, 50);
`;

const theme = createTheme();

export function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="twitter-icon">
            <SvgIcon component={TwitterIcon} />
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <LoginButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            id = "login-button"
          >
            Sign In
          </LoginButton>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
    )
}