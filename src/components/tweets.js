import React from 'react';


export const Tweets=({status,tweets,keyword,onChangeKeyword,onClickSearch})=>{
    console.log('status atm in tweets component is '+status);
    switch(status){
        case 'empty':
        return(
            <div>
                <input 
                    id="hashtag" 
                    type="text" 
                    defaultValue={keyword} 
                    onChange={onChangeKeyword}
                    placeholder="insert hashtag"
                />
                <button onClick={onClickSearch}>Search</button>         
            </div>
        );
        
        case 'loading':
        return(
            <h1>Data is being loaded... please wait</h1>
        );

        case 'available':
        return(
            <div>
                <h1>Twitter</h1>
                <ul>
                    {tweets.map((tweet,index)=><li key={index}>{tweet}</li>)}
                </ul>
            </div>
        );

        case 'error':
        return(
            <h1>Sorry.. An error occured</h1>
        );

        default:
            return(
                <div>
                    <input 
                    id="hashtag" 
                    type="text" 
                    defaultValue={keyword} 
                    onChange={onChangeKeyword}
                    placeholder="insert hashtag"
                    />
                    <button onClick={onClickSearch}>Search</button>
                    <h1>Twitter</h1>
                    <ul>
                    {tweets.map((tweet,index)=><li key={index}>{tweet}</li>)}
                    </ul>
                </div>
            );

    }
    
  
}