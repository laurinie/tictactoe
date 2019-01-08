import React from 'react';

class H1 extends React.Component{
    render(){
        return(
            <h1 style={{color:"red"}}><i>{this.props.value}</i></h1>
        )
    }
}

export default H1;