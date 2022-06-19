import classes from './Second.module.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState } from 'react';


const Second = () => {
  const [altitude, setAltitude] = useState(10);

  return (
    <div className={classes.second}>
      <h2>Testimonials</h2>

      <Grid sx={{ flexGrow: 1 }} container spacing={2}></Grid>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                onMouseEnter={() => setAltitude(3)}
                onMouseLeave={() => setAltitude(10)}
                sx={{
                  height: 270,
                  width: 200,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                elevation={altitude} 
              >
              </Paper>
            </Grid>
          ))}
        </Grid>

    </div>
  )
}

export default Second