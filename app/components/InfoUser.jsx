import React from 'react';
import moment from 'moment';

class InfoUser extends React.Component{

    render(){
        const {data} = this.props;
        return (
            <div className="row info">
                <div className='col-md-3'>
                    <div><img className="rounded-circle w-100" src={data.avatar_url} alt="avatar"/></div>
                </div>
                <div className='col-md-9'>
                    <div className='text-uppercase font-weight-bold'>{data.login}</div>
                    <div><a target="_blank" href="https://github.com/gaspersasha">{data.html_url}</a></div>
                    <br/>

                    <div className="row">
                        <div className='col-md-3'>Created at:</div>
                        <div className='col-md-6 text-right'>{moment(data.created_at).format('MMM Do YYYY')}</div>
                    </div>

                    <div className="row">
                        <div className='col-md-3'>Last commit:</div>
                        <div className='col-md-6 text-right'>{moment(data.updated_at).format('MMM Do YYYY')}</div>
                    </div>

                    <div className="row">
                        <div className='col-md-3'>Repositories:</div>
                        <div className='col-md-6 text-right'>{data.public_repos}</div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = InfoUser;
