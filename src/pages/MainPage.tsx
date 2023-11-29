import { Box, Grid, Typography, keyframes } from '@mui/material';
import { SunsetBackground } from '../components/SunsetBackground';
import { useEffect } from 'react';

export const MainPage = () => {

    useEffect(() => {
        // Hide scrollbar but allow scrolling for Chrome, Safari, and Opera
        document.body.style.overflow = 'auto';
    
        // For Chrome, Safari, and Opera
        const styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(`
            ::-webkit-scrollbar {
                display: none;
            }
        `));
        document.head.appendChild(styleElement);
    
        // Re-enable default scrollbars when the component is unmounted
        return () => {
            document.body.style.overflow = 'unset';
            document.head.removeChild(styleElement);
        };
    }, []);

    const moveTextUpAnimation = keyframes`
  0% {
    transform: translateY(500vh); // Start from the bottom
  }
  100% {
    transform: translateY(-25vh); // Move to the top
  }
`;

    const headerStyle = {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FDFACD',
        fontWeight: 'bold',
        fontSize: '3rem',
        textAlign: 'center',
    };

    const authorTextStyle = {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FDFACD',
        fontWeight: 'bold',
        fontSize: '2rem',
        textAlign: 'center',
    };

    return (<>
        <Grid
            container
            direction="column"
            justifyContent="flex-start">
            <Grid item sx={{
                width: '100vw',
                height: '100vh',
            }}>
                <SunsetBackground>
                    <Box sx={{animation: `${moveTextUpAnimation} 5s forwards`,}}>
                        <Typography variant="h1" sx={headerStyle}>
                            Sunset Poetry
                        </Typography >
                        <Typography variant="h2" sx={authorTextStyle}>
                            By: Jake Yeo
                        </Typography >
                    </Box>
                </SunsetBackground>
            </Grid>
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    height: '100vh',
                    color: '#FDFACD',
                    background: 'blue'
                }}>
                    aweiufuawerghaiuerg
                </Box>
            </Grid>
        </Grid>
    </>
    );

};