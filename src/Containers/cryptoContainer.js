import react, {useEffect, useState} from "react";
import CoinDetail from "../Components/CoinDetail";
import CoinList from "../Components/CoinList";
import CoinSelector from "../Components/CoinSelector";
import ListItem from "../Components/ListItem";


const CryptoContainer = () => {
    const[coins, setCoins] = useState(null);
    const[selectedCoins, setSelectedCoins] = useState(null);

    useEffect(() => {
        getCoins();

    }, []);

    const getCoins = function(){
        fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=10")
        .then(res => res.json())
        .then(data => setCoins(data.coins))
    }

    const onCoinSelected= function(coins){
        setSelectedCoins(coins.name)
    }

    return (
        <div className="main-container">
        {coins ? <CoinSelector coins={coins} onCoinSelected={onCoinSelected}/> : null}
        {selectedCoins ? <CoinDetail coin={selectedCoins}/> : null};

        </div>
    )



}

export default CryptoContainer;