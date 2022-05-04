import React, {useEffect, useState} from 'react';
import {QueryClient, useQuery,QueryClientProvider} from "react-query";
import SearchCity from "./components/SearchCity";


const App: React.FC = () => {

    const queryClient = new QueryClient()

     return (
         <QueryClientProvider client={queryClient}>
           <SearchCity />
         </QueryClientProvider>
    );
};

export default App;





//type PropsType = {
//tCity: any;
//}
//const SearchCity: React.FC <PropsType> =({setCity}) =>{
    //const [value,setValue] = useState("")};



    //const [weather, setWeather] = useState();

    // useEffect(() => {</HTMLInputElement>
    //     getWeather()
    // }, [])
    // console.log(weather)
    //
    // const getWeather = async () => {
    //     try {
    //         const response = await axios.get('http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7afabd7ce0a60f1eae427947e17533c7');
    //         setWeather(response.data)
    //
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

