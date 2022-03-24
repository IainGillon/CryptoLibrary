import React from 'react';


const CoinSelector = ({coins, onCoinSelected}) => {
    const handleChange = function(event) {
        onCoinSelected(coins[event.target.value]);

    }
    const coinOptions = coins.map((coins, index) => {
        return <option value={index} key={index}>
            {coins.name}
        </option>
    })
    return(
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a coin</option>

        {coinOptions}

        </select>
    )
}

export default CoinSelector