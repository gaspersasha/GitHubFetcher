import React from 'react';

import RepoItem from './RepoItem';

class Repos extends React.Component{

    renderRepoItems(data){
        if (!data || data.length === 0) {
            return (
                <div className="text-center">No repos yet</div>
            );
        }
        return data.map((repo, i) => {
            return (
                <RepoItem key={i} repo={repo}/>
            );
        });
    }

    render(){
        const {data} = this.props;
        return (
            <div className="repos">
                {this.renderRepoItems(data)}
            </div>
        )
    }
}

module.exports = Repos;



