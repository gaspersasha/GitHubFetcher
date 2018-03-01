import React from 'react';
import {connect} from 'react-redux';
const actions = require('actions');

class HeaderSearch extends React.Component{

    handleQuery = (e) => {
        e.preventDefault();
        const query = this.textField.value;
        const {user, dispatch} = this.props;
        if(query === ''){
            dispatch(actions.addBio(false))
        }
        if(query && user !== query){
            dispatch(actions.getGitUser(query));
            dispatch(actions.getGitUserRepos(query));
        }
    };

    render(){
        return (
            <div className='head-search'>
                    <div className='row'>
                        <form className="form-inline w-100" onSubmit={this.handleQuery}>
                            <div className='col-11 padding'>
                                <input ref={(field) => { this.textField = field; }} className="form-control form-control-range w-100" type="text" placeholder="Type username..."/>
                            </div>
                            <div className='col-1 padding'>
                                <button type="button" className="btn btn-primary" onClick={this.handleQuery}>Search</button>
                            </div>
                        </form>
                    </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return state;
    }
)(HeaderSearch);
