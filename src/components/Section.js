import React, { useContext, useState } from 'react'
import CryptoStats from './CryptoStats'
import { DataContext } from '../context/DataContext'
import millify from 'millify'
// import { data } from 'autoprefixer'

const Section = () => {

    const [data] = useContext(DataContext)

    // const [moreData] = useContext(DataContext);
    const coinArr = data?.data?.coins

    const showLessData = coinArr?.filter((currentCoinData)=>{
        let numbers = []
        for (let i = 0; i<=10; i++){
            numbers.push(i);
        }
        const check = numbers.includes(currentCoinData.rank) 

        if(check){
            return currentCoinData !== currentCoinData.rank 
        }
    })
    // console.log(showLessData);
    
    const [coinData, setCoinData] = useState(null);
    // console.log(numbers)
    // console.log(moreData);
    const [allCoins, setAllCoins] = useState(false)

    // console.log(allCoins)
    const showAllCoins = ()=>{
    //    setCoinData(data)
       setAllCoins(()=> !allCoins)

       if(allCoins){
        setCoinData(showLessData);
       } else {
        setCoinData(coinArr)
       }
    }

    React.useEffect(()=>{
        setCoinData(showLessData);
    },[coinArr])


  return (
    <div>
       {/* GLOBAL CRYPTO STATS */}
       <div className='flex flex-col gap-5 w-full px-4'>
            <h1 className='font-extrabold text-center text-customblue text-xl mt-3 tracking-widest'>Global Crypto Stats</h1>
            <div className='flex flex-row flex-wrap gap-5 justify-between'>
                <CryptoStats header={'total cryptocurrencies'} detail={data?.data?.stats?.totalCoins} />
                <CryptoStats header={'total exchanges'} detail={data?.data?.stats?.totalExchanges} />
                <CryptoStats header={'total market cap'} detail={millify(data?.data?.stats?.totalMarketCap)} />
                <CryptoStats header={'total 24h volume'} detail={millify(data?.data?.stats?.total24hVolume)} />
                <CryptoStats header={'total markets'} detail={millify(data?.data?.stats?.totalMarkets)} />
            </div>
       </div>
       
       <div className='h-one w-full bg-customblue mt-4 mb-4'></div>
       
       <div>
            <div className='flex flex-row justify-between px-4'>
                <h1 className='font-bold'>Top 10 cryptocurrencies in the world</h1>
                {<p onClick={showAllCoins} className='capitalize text-sm font-bold text-red-500 hover:cursor-pointer hover:text-red-700 transition ease-in-out delay-100'>{allCoins ? 'Show less' : 'Show more'}</p>}
            </div>

            {/* CRYPTO CURRENCIES DIV */}
            <div className='mt-3 flex flex-col w-full gap-3 justify-center mb-5 md:justify-around md:flex-row md:flex-wrap'>
                {coinData?.map((currentCoin)=>{
                    return (
                    <div className='bg-white px-5 py-5 w-95 rounded-lg shadow-md md:max-w-300'>
                        <div className='flex flex-row items-center justify-between'>
                            <strong>{`${currentCoin.rank}. ${currentCoin.name}`}</strong>
                            <img 
                                src={currentCoin.iconUrl}
                                alt='icon-url'
                                className='w-8 h-8'
                            />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <p>Price:  <strong>{`$${millify(currentCoin.price)}`}</strong></p>
                            <p>Market Cap: <strong>{millify(currentCoin.marketCap)}</strong></p>
                            <p>Daily Change: <strong>{`${millify(currentCoin.change)}%`}</strong></p>
                        </div>
                    </div>
                    )
                })}
            </div>
       </div>
    </div>
  )
}

export default Section