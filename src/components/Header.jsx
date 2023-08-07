import { Link } from "react-router-dom";
import AuthService from "../utils/auth";
import { useSelector } from "react-redux";
import { getUser } from "../redux/slices/userSlice";
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { AppBar, Container, ThemeProvider, Toolbar, Stack } from "@mui/material";
import UnstyledLink from "./UnstyledLink";