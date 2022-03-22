import React from "react";
import listItem from "./listItem";

const coinList = ({coins, onCoinClick}) => {
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

export default coinList
