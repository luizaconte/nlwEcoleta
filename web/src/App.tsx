import React  from 'react';
import  './App.css';
import Routes from'./routes';

function App(){
return(
  <Routes/>
)
}

export default App;

/*


import React from 'react';

interface HeaderProps{
    //com ? não é obrigatória
    title: string;
}

//fc function component
const Header: React.FC<HeaderProps>=(props)=>{

    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    )
}
export default Header;

fim classe Header





const[counter,setCounter]=useState(0);

function handleButtonClick(){
  setCounter(counter+1);
}

  return(
    <div>
      <Header title="Hello World"/>
      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
     

  );

*/