import {useState , useEffect} from 'react'



import "./index.scss"

const Timer = ({time}) => {
    const hour = Math.floor(time / 3600);
    const [ minutes, setMinutes ] = useState(Math.floor((time - hour * 3600) / 60));
    const [seconds, setSeconds ] =  useState(Math.floor(time % 60));

    useEffect(()=>{
      let myInterval = setInterval(() => {
              if (seconds > 0) {
                  setSeconds(seconds - 1);
              }
              if (seconds === 0) {
                  if (minutes === 0) {
                      clearInterval(myInterval)
                  } else {
                      setMinutes(minutes - 1);
                      setSeconds(59);
                  }
              } 
          }, 1000)
          return ()=> {
              clearInterval(myInterval);
            };
      });
  return (
    <div className="TIMER-login">
        <p className="fw-700 fs-18 text-center"> { minutes === 0 && seconds === 0
            ? "00:00"
            : <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }</p>
    </div>
  )
}

export default Timer

