import React, { useEffect } from 'react';

export const NewsList = () => {
    console.log(+(Math.random()*33).toFixed());
    function blockRandomizer() {
        return <div style={
            {
                borderRadius: '5px',
                width: +(Math.random()*250 + 100).toFixed(),
                height: +(Math.random()*250 + 100).toFixed(),
                backgroundColor: `#${+(Math.random()*90+9).toFixed()}${+(Math.random()*90+9).toFixed()}${+(Math.random()*90+9).toFixed()}`}
        }>{+(Math.random()*100 + 50).toFixed()}</div>
    }
    return (
        <div style={{display: "flex", flexWrap: 'wrap', gap: '10px', width: '900px'}}>
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
            {blockRandomizer()}
        </div>
    );
};