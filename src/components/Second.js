import classes from './Second.module.css';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const Second = () => {
  return (
    <div className={classes.second}>
      <h2>Testimonials</h2>

      <Grid sx={{ flexGrow: 1 }} container spacing={2}></Grid>
        <Grid container justifyContent="center" spacing={2}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 270,
                  width: 200,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                elevation={10} 
              />
            </Grid>
          ))}
        </Grid>
        
    </div>
  )
}

export default Second