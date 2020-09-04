import React from "react";
import history from "./history";

class MasterPanel extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Welcome To Master Pannel</h1>
                <button className="masterpannelbtn" onClick={()=> history.push('SeriesMasterPanel')}> Series</button>
                <button className="masterpannelbtn" onClick={()=> history.push('MatchMasterPanel')} > Match</button>
            </div>
        )
    };
}

export default MasterPanel;