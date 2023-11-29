import { Box, BoxProps } from "@mui/material";
import { keyframes } from '@emotion/react';
import SunsetVectorNoSun from '../svgs/SunsetVectorNoSun.svg';
import SunsetVectorSunOnly from '../svgs/SunsetVectorSunOnly.svg';
import SunsetVectorBlackCloudsOnly from '../svgs/SunsetVectorBlackCloudsOnly.svg';

const moveSunUpAnimation = keyframes`
  0% {
    transform: translateY(50%); // Start from the bottom
  }
  100% {
    transform: translateY(-2%); // Move to the top
  }
`;


export const SunsetBackground = (props: React.PropsWithChildren & BoxProps) => {
  return (
    // Wrap the entire animation inside of another box that will act as the background
    <Box
      sx={{
        zIndex: 1,
        position: 'absolute',
        width: '100vw', // Fixed viewport width
        height: '100vh', // Fixed viewport height
        overflow: 'hidden', // Prevent scrolling caused by overflowing content
        background: '#021C35',
        ...props.sx
      }}
    >

      {/*Full image without the moon*/}
      <Box
        sx={{
          zIndex: 1,
          position: 'absolute',
          width: '100vw', // Fixed viewport width
          height: '100vh', // Fixed viewport height
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: SunsetVectorNoSun,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          ...props.sx
        }}
        {...props}
      >

        {/* Moving Sun */}
        <Box sx={{
          overflow: 'hidden',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}>
          <Box
            sx={{
              zIndex: 3,
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: SunsetVectorSunOnly,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              animation: `${moveSunUpAnimation} 5s forwards`
            }}
          />
        </Box>
        {/* Mountains only image to cover the moon*/}
        <Box
          sx={{
            zIndex: 4,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: SunsetVectorBlackCloudsOnly,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
          }}
        />
        {/* Mountains only image to cover the sign in button*/}
        <Box
          sx={{
            zIndex: 7,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/WinterVectorTransparentBackgroundWithSnow.svg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
        />
        {props.children}
      </Box>
    </Box>
  );
}