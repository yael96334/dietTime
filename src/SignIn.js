import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Subscribe from './Subscribe';
import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
import Router from './Router';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>

    );
}

const theme = createTheme();


export default function SignIn() {
    const formik = useFormik({
        initialValues: {
    
            email: '',
            username: '',
            
        },
        validationSchema: Yup.object({
           
            email: Yup
                .string()
                .email(
                    'Must be a valid email')
                .max(255)
                .required(
                    'Email is required'),
            username: Yup
                .string()
                .max(20)
                .required(
                    'username is required'),
        }),
        onSubmit:(event) => {

            // handleSubmit(event);
        }
    });
    let navigate = useNavigate();

    const handleSubmit = async (event) => {
          event.preventDefault();
        const data = new FormData(event.currentTarget);
       console.log({
           email:data.get('email'),
            username:data.get('username')
       })
        await login(data.get('email'), data.get('username'));
        //  navigate("/Subscribe")
    };
    const login = async (email, username) => {
        try {
            
            const result = await axios.get(`https://localhost:44318/Login`,{
                params:{
                    email:email,
                    username:username
                }
            }).then((res) => {
                if (res === 1)
                    navigate("/HomePage");

                else
                    if (res === 0)
                        navigate("/Subscribe",{state:{username:username,email:email}});
                    else
                        navigate("/Subscribe",{state:{username:username,email:email}});

                console.log(res)
            }).catch((err) => {
                console.log(err);
                navigate("/Subscribe",{state:{username:username,email:email}});

            })
            console.log(result.data);
        }
        catch (err) {
            console.log(err)
        }
    }
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit}  onSubmit={handleSubmit}  noValidate sx={{ mt: 1 }}>
                        
                        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                        <TextField
                            autoComplete="username"
                            // variant="filled"
                            required
                            fullWidth
                            name="username"
                            label="username"
                            type="username"
                            id="username"
                            error={Boolean(formik.touched.username && formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.username}

                        // variant="standard"
                        />
                        <TextField
                              required
                              fullWidth
                              id="email"
                              // label={location.state.email}
                              label="email"
                              name="email"
                              autoComplete="email"
                              error={Boolean(formik.touched.email && formik.errors.email)}
                              helperText={formik.touched.email && formik.errors.email}
                              onBlur={formik.handleBlur}
                              onChange={formik.handleChange}
                              value={formik.values.email}

                              type="email"
                              margin="normal"
                            
                        />

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            disabled={formik.isSubmitting}

                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
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
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}