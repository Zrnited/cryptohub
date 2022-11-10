import React, { useContext, createContext } from "react";

export const DataContext = createContext(); 

export const DataContextProvider = ({ children })=>{

    const [data, setData] = React.useState(null);
    const [moreData, setMoreData] = React.useState(null);

    //less data...
    React.useEffect(()=>{
        getCoinData();
    }, [])

    //more data...
    // React.useEffect(()=>{
    //     getMoreCoinData();
    // }, [])
    
    //less data...
    const getCoinData = ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '58ec6a3606msh39d0153fa51734dp16d2c2jsn3dbc50ce8ddb',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            },
        };

        fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit50&offset=0', options)
        .then(response => response.json())
        .then(response => {
            // console.log(response);
            setData(response);
        })
        .catch(err => console.error(err));
    }

    //more data...
    // const getMoreCoinData = ()=>{
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': '58ec6a3606msh39d0153fa51734dp16d2c2jsn3dbc50ce8ddb',
    //             'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    //         },
    //     };

    //     fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    //     .then(response => response.json())
    //     .then(response => {
    //         // console.log(response);
    //         setMoreData(response);
    //     })
    //     .catch(err => console.error(err));
    // }

    return (
        <DataContext.Provider value={[data, moreData]}>
            {children}
        </DataContext.Provider>
    )
}

// export default DataContextProvider