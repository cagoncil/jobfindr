import './Navbar.css';

const Navbar = () => {
  
  return (
    <nav>
        <span>JobFindr</span>

        <input type="checkbox" id="nav" className="hidden"/>
        <label for="nav" className='navBtn'>
            <i></i>
            <i></i>
        </label>
        <div className='navWrapper'>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li><button className="registerBtn">Register</button></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar