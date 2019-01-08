import React from 'react';
import ShowGame from "./ShowGame";

class List extends React.Component{
    render(){
        return(
            <ul>
                <li>Nimi: Onni Niemi</li>
                <li>Num: 0501234567</li>
                <li>Email: onni.niemi@varpo.fi</li>
                <ShowGame/>
            </ul>
        )
    }
}

export default List;