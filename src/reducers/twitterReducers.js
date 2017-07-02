export function keyword_r(state=[],action){
    switch(action.type){
        case 'UPDATE_KEYWORD':
            console.log('entered keyword_r reducer');
            const newState=state;
            newState.pop();
            newState.push(action.keyword);
            state=newState;
            console.log("state atm is "+state);
            return state;
        default:
            return state;
    }
}

export function tweets_r(state=[],action){
    switch(action.type){
        case 'UPDATE_TWEETS':
            const newState=state;
            newState.push(action.tweet);
            state=newState;
        return state;

        case 'DISPLAY':
            console.log('in display case reuducer ',state);
            return state;

        default:
            return state;
    }
}

export function status_r(state=[],action){
    switch(action.type){
        case 'UPDATE_STATUS':  
            const newState=state;
            newState.pop();
            newState.push(action.status);
            state=newState;
            return state;
        default:
            return state;
    }
}

