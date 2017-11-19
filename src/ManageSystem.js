import React from 'react';
import StaffHeader from './StaffHeader.js';
import StaffItemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';
import Staff from './Staff.js';

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            staff : new Staff
        };
    }

    render(){
        return (
            <div>
                <StaffHeader/>
                <StaffItemPanel items={this.state.staff.staff} />
                <StaffFooter/>
                <StaffDetail/>
            </div>
        );
    }
}

React.render(<App />, document.getElementById('app'));