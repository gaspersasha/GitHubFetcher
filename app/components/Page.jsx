import React from 'react';

import Header from 'Header';
import Body from 'Body';

class Page extends React.Component{
    componentWillMount(){

    }
    render(){
        return (
            <content>
                <Header/>
                <Body/>
            </content>
        )
    }
}

module.exports = Page;
