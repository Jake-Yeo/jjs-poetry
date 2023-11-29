import { Box, Divider, Grid, Typography, keyframes } from '@mui/material';
import { SunsetBackground } from '../components/SunsetBackground';
import { useEffect, useState } from 'react';

function GetPoemTitleComponent({ title }: { title: string }) {
    const headerStyle = {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FDFACD',
        fontWeight: 'bold',
        fontSize: '2rem',
        whiteSpace: 'pre-line',
        textAlign: 'left',
        textDecoration: 'underline',
    };

    return (<>
        <Typography sx={headerStyle}>
            {title}
        </Typography>
    </>);
}

type GetPoemComponentProps = {
    path: string;
    title: string;
};

const GetPoemComponent: React.FC<GetPoemComponentProps> = ({ path, title }) => {
    const [fileContent, setFileContent] = useState('');

    const headerStyle = {
        fontFamily: 'Montserrat, sans-serif',
        color: '#FDFACD',
        fontWeight: 'bold',
        fontSize: '1rem',
        textAlign: 'left',
        whiteSpace: 'pre-line',
        padding: '1rem',
    };

    useEffect(() => {
        fetch(path) // ex: '/path/to/your/file.txt'
            .then(response => response.text())
            .then(text => {
                setFileContent(text);
            })
            .catch(error => {
                console.error('Error fetching text file:', error);
                setFileContent('Failed to load the text file.');
            });
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <GetPoemTitleComponent title={title} />
            <Typography variant="body1" sx={headerStyle}>
                {fileContent}
            </Typography>
        </Box>
    );
}

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

    const yesterdayPoem = '';

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
                    <Box sx={{ animation: `${moveTextUpAnimation} 5s forwards`, }}>
                        <Typography variant="h1" sx={headerStyle}>
                            Sunset Poetry
                        </Typography >
                        <Typography variant="h2" sx={authorTextStyle}>
                            By: Jake Yeo
                        </Typography >
                    </Box>
                </SunsetBackground>
            </Grid>
            {/* Yesterday Poem */}
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    color: '#FDFACD',
                    background: '#021C35',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '20vh',
                    paddingBottom: '10vh',
                }}>
                    <GetPoemComponent path='/Yesterday.txt' title='Yesterday' />
                </Box>
            </Grid>
            {/* In The Green Poem */}
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    color: '#FDFACD',
                    background: '#021C35',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                }}>
                    <GetPoemComponent path='/InTheGreen.txt' title='In The Green' />
                </Box>
            </Grid>
            {/* Just As Important */}
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    color: '#FDFACD',
                    background: '#021C35',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                }}>
                    <GetPoemComponent path='/JustAsImportant.txt' title='Just As Important' />
                </Box>
            </Grid>
            {/* ButIfYouDoImSorry */}
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    color: '#FDFACD',
                    background: '#021C35',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                }}>
                    <GetPoemComponent path='/ButIfYouDoImSorry.txt' title="But If You Do I'm Sorry" />
                </Box>
            </Grid>
            {/* GreyMist */}
            <Grid item>
                <Box sx={{
                    width: '100vw',
                    minHeight: '100vh',
                    color: '#FDFACD',
                    background: '#021C35',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                }}>
                    <GetPoemComponent path='/GreyMist.txt' title="Grey Mist" />
                </Box>
            </Grid>
        </Grid>
    </>
    );

};