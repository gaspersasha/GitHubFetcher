import React from 'react';
import {connect} from 'react-redux';

import Welcome from './Welcome';
import Bio from './Bio';

class Body extends React.Component{
    componentWillMount(){

    }
    render(){
        const {bio} = this.props;
        return (
            <div>
                {bio ? <Bio/> : <Welcome/>}
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            bio: state.bio
        };
    }
)(Body);
