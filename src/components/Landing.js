import Svg from './Svg';
import Navbar from './Navbar';
import classes from './Landing.module.css'
import image from '../assets/top-img.png';


const Landing = () => {
  return (
    <div className={classes.Landing}>
        <div className={classes.blueMobile}></div>
        <Svg/>
        <Navbar/>
        <div className={classes.container}>
            <img alt='job' src={image}/>
            <div>Looking for a new job is always stressful. Let us simplify the process for you.
                <p>Your dream job is just a quick search away.</p>
                <button className="start">Start Now</button>
            </div>
        </div>
    </div>
  )
}

export default Landing