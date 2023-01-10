import React from "react";
import NavBar from "../../components/NavbarComponent/NavBar";
import Login from "../../components/LoginComponent/Login";
import "./loginPageStyle.css";
import { Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, SvgIcon, TextField, ThemeProvider, Typography } from "@mui/material";
import { createTheme } from '@mui/material/styles';
import { styled } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";

export function LoginPage() {
  return (
    <Login />
  )
}