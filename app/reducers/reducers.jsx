export const userReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.user;
        default:
            return state;
    }
};

export const bioReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BIO':
            return action.bio;
        default:
            return state;
    }
};

export const reposReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_REPO':
            return action.repos;
        default:
            return state;
    }
};