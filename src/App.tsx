import React from 'react';
import WeatherContainer from "./container/WeatherContainer";
import {useRoutes} from "react-router-dom";

const App: React.FC = () => {
  return useRoutes([
    {
      path: "/",
      element: <WeatherContainer/>
    }
  ]);


};

export default App;


