import './App.css';
import { useState} from 'react';

function Square ({value , click}){
 
  return(
    <button className='square' onClick={click}>{value}</button>
  )
} 

function App() {
  const [faith , setfaith]= useState(Array(9).fill(null))
  const [Nextx , setNextx]= useState(true)
  let status;
  const winner = calculateWinner(faith)
  if(winner){
    status='winner is '+ winner
  }
  else{
    status='KEEP PLAYING'
  }

  function handleClick(i){
    const newfaith = faith.slice()
    if (newfaith[i] || calculateWinner(faith)){
      return;
    }
    if (Nextx){
      newfaith[i]='X'
      

    }
    else{
      newfaith[i]='O'
      
    }
    setNextx(!Nextx)
    setfaith(newfaith)
   
   
  }

  return (
    <>
      
      <div className='box-parent'>
        <div className='status'>{status}</div>
        <div className='tic-row'>
          <Square value={faith[0]} click={()=> handleClick(0)} />
          <Square value={faith[1]} click={()=> handleClick(1)} />
          <Square value={faith[2]} click={()=> handleClick(2)} />
        </div>
        <div className='tic-row'>
          <Square value={faith[3]} click={()=> handleClick(3)} />
          <Square value={faith[4]} click={()=> handleClick(4)}/>
          <Square value={faith[5]} click={()=> handleClick(5)} />
        </div>
        <div className='tic-row'>
          <Square value={faith[6]} click={()=> handleClick(6)} />
          <Square value={faith[7]} click={()=> handleClick(7)} />
          <Square value={faith[8]} click={()=> handleClick(8)} />
        </div>
        

      </div>
    </>
  );
}

function calculateWinner(faith) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (faith[a] && faith[a] === faith[b] && faith[a] === faith[c]) {
      return faith[a];
    }
  }
  return null;
}

export default App;
