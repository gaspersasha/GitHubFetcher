import React from 'react';
import {connect} from 'react-redux';

import InfoUser from './InfoUser';
import InfoRepos from './InfoRepos';
import NoUser from './NoUser';

class Bio extends React.Component{
    componentWillMount(){

    }
    render(){
        const {bio, repos} = this.props;
        return (
            <div className="bio">
                <div className="offset-3 col-sm-6">
                    { this.props.bio ? <div><InfoUser data={bio}/><InfoRepos data={repos}/></div> : <NoUser/>}
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            bio: state.bio.data,
            repos: state.repos.data
        };
    }
)(Bio);
