
import './App.css';
import {Switch,Route} from "react-router-dom"
import Post from './components/kk/Post';
function App() {
  
  return (
    <>

  <Switch>
    
  <Route exact path="/" component={Post} />


    </Switch>
 
    
    

    </>
  );
}

export default App;
