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

enum Spaces {
    NormalSpace = '<Space22>',
    LargeSpace = '<Space36>',
    SmallSpace = '<Space7>'
}

const GetPoemComponent: React.FC<GetPoemComponentProps> = ({ path, title }) => {

    // Everytime setFileContent is given a String, the contents in fileContent are updated. The type is  inferenced from the intial value
    // Since useState('') sets fileContent to an empty String, the program knows it's of type String.
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

    const poemLines: String[] = fileContent.split('\n');

    const poemComponents = [];

    for (let i: number = 0; i < poemLines.length; i++) {
        if (poemLines[i] == Spaces.NormalSpace) {
            poemComponents.push(<Box key={i}
                sx={{
                    width: '100vw',
                    height: '200px',
                }}
            />)
        } else if (poemLines[i] == Spaces.LargeSpace) {
            poemComponents.push(<Box key={i}
                sx={{
                    width: '100vw',
                    height: '300px',
                }}
            />)
        } else if (poemLines[i] == Spaces.SmallSpace) {
            poemComponents.push(<Box key={i}
                sx={{
                    width: '100vw',
                    height: '100px',
                }}
            />)
        } else {
            poemComponents.push(<Typography key={i}
                variant="body1"
                sx={headerStyle}>
                {poemLines[i]}
            </Typography>);
        }
    }



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
            {poemComponents}
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
                            My Pallet of Words
                        </Typography >
                        <Typography variant="h2" sx={authorTextStyle}>
                            By: Jake Yeo
                        </Typography >
                    </Box>
                </SunsetBackground>
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
                    <GetPoemComponent path='./InTheGreen.txt' title='In The Green' />
                </Box>
            </Grid>
            {/* Homes */}
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
                    <GetPoemComponent path='./Homes.txt' title='Homes' />
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
                    <GetPoemComponent path='./ButIfYouDoImSorry.txt' title="But If You Do I'm Sorry" />
                </Box>
            </Grid>
            {/* If Only It Were The Afternoon */}
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
                    <GetPoemComponent path='./IfOnlyItWereTheAfternoon.txt' title="If Only It Were The Afternoon" />
                </Box>
            </Grid>
        </Grid>
    </>
    );

};