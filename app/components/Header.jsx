import React from 'react';

import HeaderSearch from './HeaderSearch';

class Header extends React.Component{
    componentWillMount(){

    }
    render(){
        return (
            <div className="header white-stressed-header" >
                    <div className="row">
                        <div className="col-sm-3 font-weight-bold logo rainbow">GitHubFetcher</div>
                        <div className="col-sm-6"><HeaderSearch/></div>
                    </div>
            </div>
        )
    }
}

module.exports = Header;



