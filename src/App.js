import './App.css';
import { addCount, reduceCount } from './Redux/actions';
import { useContext } from 'react';
import { AppContext } from './Context/AppContextProvider';


function App() {
  const { getState, dispatch } = useContext(AppContext);
  const { counter } = getState();
  return (
      <div className="App">
          <h1>Counter : {counter}</h1>
          <button onClick={() => dispatch(addCount(1))}>add</button>
          <button onClick={() => dispatch(reduceCount(1))}>reduce</button>
      </div>
  );
}

export default App;
