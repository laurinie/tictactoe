import React from 'react';
import Game from "./Game";
import H1 from "./H1";

class ShowGame extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showGame: false,
        };
    }
    
    handleClick() {
        this.setState({
            showGame: !this.state.showGame
        });
    }
    render() {
        return (
            <div>
                <button onClick={()=>this.handleClick()}>Tämä on nappula</button>
                {this.state.showGame?<Game/>:<h1>Paina nappulaa pelataksesi</h1>}
                <H1 value={"Hieno peli, eiks je"}/>
            </div>
        )
    }
}

export default ShowGame;