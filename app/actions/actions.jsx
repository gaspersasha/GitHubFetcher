import axios from 'axios';
import Config from 'config';

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    };
};

export const addBio = (bio) => {
    return {
        type: 'ADD_BIO',
        bio
    };
};

export const addRepo = (repos) => {
    return {
        type: 'ADD_REPO',
        repos
    };
};

export function getGitUser(user){
    return function(dispatch){
        axios.get('https://api.github.com/users/'+user+Config.accessToken)
            .then(function(res){
                console.log('bio', res);
                dispatch(addBio(res));
            },function(){
                dispatch(addBio([]));
            });
    }
}

export function getGitUserRepos(user){
    return function(dispatch, getState){
        axios.get('https://api.github.com/users/'+user+'/repos'+Config.accessToken)
            .then(function(res){
                console.log('repos', res);
                dispatch(addRepo(res));
            },function(){
                dispatch(addRepo([]));
            });
    }
}






