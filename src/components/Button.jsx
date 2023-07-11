import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function LeftButton(props) {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab >
        <ArrowBackIosIcon />
      </Fab>
    </Box>
  );
}

function RightButton(props) {
    return (
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab >
          <ArrowForwardIosIcon />
        </Fab>
      </Box>
    );
  }

export {LeftButton, RightButton}
