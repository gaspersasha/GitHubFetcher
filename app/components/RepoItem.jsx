import React from 'react';
import moment from 'moment';

const RepoItem = (props) => {
    const data = props.repo;
    return (
        <a target="_blank" href={data.html_url}>
            <div className="row repo-item">
                <div className="col-6 repo-name">{data.name}</div>
                <div className="col-2">Last push:</div>
                <div className="col-3">{moment(data.pushed_at).format('MMM Do YYYY')}</div>
                <div className="col-1 text-right">public</div>
            </div>
        </a>
    )
};

export default RepoItem;