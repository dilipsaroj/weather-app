import './App.css';
import {Route, Switch} from 'react-router-dom';
import 'weather-icons/css/weather-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Daily from './component/dailyWeather';

import './component/weather.scss'
import Forecast from './component/Forecast';
import Error from './component/Error';
import Menu from './component/Menu';


function App() {
  return (
    <div className="App py-4">
      <div className="container col-lg-12 ">
        <Menu />
        <Switch>
        <Route exact path="/" component={Daily}/>
         <Route path="/forecast" component={Forecast}/>
         <Route component={Error} />
        </Switch>

      </div>
      
    </div>
  );
}

export default App;
