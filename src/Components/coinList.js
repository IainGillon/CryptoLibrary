import React from "react";
import ListItem from "./ListItem";

const coinList = ({coins, onCoinClick}) => {
    const coinList = coins.map((coins, index) => {
        return <ListItem coins={coins} key={index} onCoinClick={onCoinClick}/>
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