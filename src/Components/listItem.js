import React from 'react';

 const ListItem =  ({coins, onCoinClick}) => {
     const handleClick = function(){
         onCoinClick(coins)
     }
     return <li onClick={handleClick}>{coins.name}</li>



 }

 export default ListItem