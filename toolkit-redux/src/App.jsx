import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement, incrementBy2 } from './store/slices/index';
function App() {
  
  const { counter } =  useSelector( state => state.counter );
  const dispatch = useDispatch();
  return (
    <div className="App">
      
      <h1>count is {counter}</h1>
      <div className="card">
        <button onClick={() =>  dispatch( increment() )}>
          Increment
        </button>
        <button onClick={() =>  dispatch( decrement() )}>
          Decrement
        </button>
        <button onClick={() =>  dispatch( incrementBy2(2) )}>
          Increment by 2
        </button>
      </div>
      
    </div>
  )
}

export default App
