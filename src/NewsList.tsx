import React, { useEffect, useState } from 'react';

export const NewsList = () => {
    const [resState, setResState] = useState<any>()
    // async function newsGetter() {
        // d8053b5977f94849b3de7f2fe5e83ffa
    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=sports&language=ru&apiKey=d8053b5977f94849b3de7f2fe5e83ffa`).then((res) => res.json()).then((res) => setResState(res))
    }, [])

    resState && console.log(resState)
    return (
        <div>
            {resState && resState.articles.map((item: any, index: number) => {
                return (
                  <div key={index}>
                      <h2>{item.title}</h2>
                      <p>{item.author}</p>
                      <p>{item.descriotion}</p>
                  </div>
                )
            })}
        </div>
    );
};