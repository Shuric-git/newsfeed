import React, { useEffect } from 'react';

export const NewsList = () => {
    async function newsGetter() {
        // d8053b5977f94849b3de7f2fe5e83ffa
        let res = await fetch(`https://newsapi.org/v2/everything?q=sports&language=ru&apiKey=d8053b5977f94849b3de7f2fe5e83ffa`).then((res) => res.json())
        // .then((res) => console.log(res))
        // let json = await res.json()
        await console.log(res)
        res.articles.map((item) => {
            console.log(item)
            let wrapper = document.createElement('div');
            wrapper.style.height = '50px';
            wrapper.innerHTML = item.description;
            body.append(wrapper)
        })
    }
    newsGetter()
    return (
        <div>

        </div>
    );
};