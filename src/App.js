import './App.css';
import Todos from './Components/ToDos/Todos';
import globalReducer from './Redux/Store';
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={globalReducer}>
        <Todos />
      </Provider>


    </div>
  );
}
export default App;
