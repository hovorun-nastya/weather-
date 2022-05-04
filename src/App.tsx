import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import WeatherContainer from "./container/WeatherContainer";

const App: React.FC = () => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContainer/>
    </QueryClientProvider>
  );
};

export default App;


