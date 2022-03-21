import React from "react";

const CharacterDetail = ({character}) => {
    return (
        <div>
            <h3>{coins.name}</h3>
            <p>{coins.symbol}</p>
            <p>1 Hour {coins.priceChange1h}</p>
            <p>24 Hours {coins.priceChange1d}</p>
            <p><img class="picture" src={coins.icon}/></p>

        </div>
    )
}
 
export default coinDetail