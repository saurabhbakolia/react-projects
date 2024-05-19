import React, { useEffect, useState } from 'react';
import { Box, Button, Typography, Alert, CircularProgress, Paper, FormControl, InputLabel, Select } from '@mui/material';

const JokesApp = () => {
    const [joke, setJoke] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchJoke = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any');
            const data = await response.json();
            if (data.error) {
                setError(data.message);
            } else {
                const jokeText = data.type === 'single' ? data.joke : `${data.setup} - ${data.delivery}`;
                setJoke(jokeText);
            }
        } catch (error) {
            setError('Failed to fetch joke');
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchJoke();
    }, []);


    return (
        <>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Jokes App
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'start',
                        height: '100vh',
                        gap: '1rem'
                    }}
                >
                    {loading ? (
                        <CircularProgress />
                    ) : error ? (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    ) : (
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {joke}
                        </Typography>
                    )}
                    <Button variant="contained" color="primary" onClick={fetchJoke}>
                        Get Another Joke
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default JokesApp