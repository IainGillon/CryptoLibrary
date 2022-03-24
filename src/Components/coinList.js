import React from "react";
import ListItem from "./ListItem";

const CoinList = ({coins, onCoinClick}) => {
    const coinList = coins.map((coins, index) => {
        return <listItem coins={coins} key={index} onCoinClick={onCoinClick}/>
    })
    return (
        <div>
            <ul>
                {coinList}
            </ul>
        </div>
    )
}

export default CoinList
