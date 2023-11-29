import { Box, Grid, Typography, keyframes } from '@mui/material';
import { SunsetBackground } from '../components/SunsetBackground';

export const MainPage = () => {

    const moveTextUpAnimation = keyframes`
  0% {
    transform: translateY(500vh); // Start from the bottom
  }
  100% {
    transform: translateY(0vh); // Move to the top
  }
`;

    const headerStyle = {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FDFACD',
        fontWeight: 'bold',
        fontSize: '3rem',
        textAlign: 'center',
        animation: `${moveTextUpAnimation} 5s forwards`,
    };

    return (<>
        <SunsetBackground>
            <Grid
                container
                direction="column"
                alignItems="baseline">
                <Grid item xs={12} sx={{
                    width: '100vw',
                    height: '100vh',
                }}>
                    <Typography variant="h1" sx={headerStyle}>
                        Sunset Poetry
                    </Typography >
                </Grid>
                <Grid item xs={12} sx={{ padding: 0 }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100vw',
                        height: '100vh',
                        color: '#FDFACD',
                        background: 'blue'
                    }}>
                        aweiufuawerghaiuerg
                    </Box>
                </Grid>
            </Grid>
        </SunsetBackground>
    </>
    );

};