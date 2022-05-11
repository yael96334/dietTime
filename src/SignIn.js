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
import { Routes,Route,BrowserRouter } from 'react-router-dom';



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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        await login(data.get('email'), data.get('password'));
    };
    const login = async (email, password) => {
        try {
            
            const result = await axios.get('https://localhost:44318/Login/Login?email=${email}&pass=${password}'+ {
                // // headers: {
                // //     'Access-Control-Allow-Origin': '*',
                // //     'Access-Control-Allow-Headers': '*',
                // // }
            }).then(res=>
                {
                    // if(res.data==-1)
                     

                }
            ) ;   
            
            
            console.log(result.data);
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        
        <ThemeProvider theme={theme}>
                <BrowserRouter>
    <Link to="/Subscribe">Subscribe</Link>
    {/* <br/>
    <Link to="/Subscribe">Subscribe</Link> */}
    <Routes>
        <Route path="Subscribe" element={<Subscribe/>}/>
        {/* <Route path="BookStatus" element={<BookStatus/>}/> */}
    </Routes>
    </BrowserRouter>
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
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            variant="standard"
                            autoFocus
                        />
                        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // variant="standard"
                        />
                        
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
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