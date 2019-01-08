import React from 'react';
import List from "./List";
import H1 from "./H1";

class Sites extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <H1 value={"Otsikko"}/>
                <h1>Otsikko</h1>
                <List />
            </div>
        )
    }
}

export default Sites;