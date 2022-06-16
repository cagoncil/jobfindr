import classes from './Svg.module.css';

const Svg = (props) => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#d1dbf0"
        d="m0 64 48 42.7C96 149 192 235 288 272s192 27 288-21.3C672 203 768 117 864 96s192 21 288 64 192 85 240 106.7l48 21.3V0H0Z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#7290d0"
        d="M0 320h48c48 0 144 0 240-48S480 128 576 90.7c96-37.7 192-15.7 288 32 96 48.3 192 122.3 288 106.6 96-16.3 192-122.3 240-176L1440 0H0Z"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <path
        fill="#324EA3"
        d="m0 288 48-42.7C96 203 192 117 288 112s192 69 288 64 192-91 288-85.3c96 5.3 192 101.3 288 122.6 96 21.7 192-32.3 240-58.6l48-26.7V0H0Z"
      />
    </svg>
  </>
  )
  
  export default Svg