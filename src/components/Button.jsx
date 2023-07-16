import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



function LeftButton(props) {
  return (<div>
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab id="leftArrow" onClick={props.onClick}>
        <ArrowBackIosIcon />
      </Fab>
    </Box>
    </div>
  );
}

function RightButton(props) {
    return (<div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab id="rightArrow" onClick={props.onClick}>
          <ArrowForwardIosIcon />
        </Fab>
      </Box>
      </div>
    );
  }

export {LeftButton, RightButton}
