import './App.css';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
					<Route  path={'/'} exact={true}  component={Homepage} />
			</Switch>
    </div>
  );
}

export default App;
