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
                {this.state.showGame?<Game/>:<h3>Paina nappulaa pelataksesi</h3>}
                <button onClick={()=>this.handleClick()}>Ristinolla</button>
                {this.state.showGame?<H1 value={"Hieno peli eiks je"}/>:<div/>}
            </div>
        )
    }
}

export default ShowGame;