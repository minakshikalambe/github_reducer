import { AppContext } from "./AppContext/AppContextProvider"
import style from './App.css';
import { useContext } from 'react';
import Button from './Button/Button';
import Counter from "./Counter/Counter";
import Github from "./Counter/Github"
console.log("ss:" ,style)
function App() {
  const[theme,toggleTheme]=useContext(AppContext)
  console.log(style.App)
  return (
    <>
{/*    
    <div className={theme==="light"? "AppLight" : "AppDark"}>
        <Button text="Theme" />
        <br></br>
        <button onClick={toggleTheme}>TOGGLE</button>
    </div> */}
    {/* <Counter/> */}
     <Github/>
    </>
  );
}

export default App;
