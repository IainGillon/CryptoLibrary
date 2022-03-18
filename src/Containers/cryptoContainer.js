import react, {useEffect, useState} from "react";

const cryptoContainer = () => {
    const[characters, setCoins] = useState(null);
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
        setSelectedCoin(coins.name)
    }

    return (
        <div className="main-container">
        {coins ? <CharacterSelector coins={coins} onCoinSelected={onCoinSelected}/> : null}
        {selectedCoin ? <coinDetail coin={selectedCoine}/> : null};

        </div>
    )



}