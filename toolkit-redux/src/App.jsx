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
         INCREMENT
        </button>
        <button onClick={() =>  dispatch( decrement() )}>
          DECREMENT
        </button>
        <button onClick={() =>  dispatch( incrementBy2(2) )}>
          INCREMENT BY 2
        </button>
      </div>
      
    </div>
  )
}

export default App
