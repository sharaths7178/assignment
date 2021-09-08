import './App.css';
//import { useState } from 'react';
import MainRoutes from './ui-routes/MainRoute';
//import Login from  './ui-pages/Login';

const  App = props => {
  //const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className={"App"}>
      <MainRoutes />
    </div>
  );
}

export default App;
