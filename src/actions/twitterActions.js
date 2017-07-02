

export function updateKeyword(keyword){
    return{type:'UPDATE_KEYWORD',keyword:keyword}
}


export function updateTweets(tweet){
    return{type:'UPDATE_TWEETS',tweet:tweet}
}

export function updateStatus(status){
    return{type:'UPDATE_STATUS',status:status}
}