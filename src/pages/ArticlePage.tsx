import React from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/TopBar';

const ArticlePage = () => {
    const location = useLocation();
    /*     const { title, body, imageUrl, source, date } = location.state || {};  // Destructure the state
     */
    const { title, body, imageUrl, source, date } = {
        title: "Trump on rampage in New York city",

        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum eum accusantium maiores, deleniti non. Atque molestias nobis dolorem quam dolor quasi ullam similique recusandae incidunt ratione quae, suscipit eum?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum eum accusantium maiores, deleniti non. Atque molestias nobis dolorem quam dolor quasi ullam similique recusandae incidunt ratione quae, suscipit eum?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum eum accusantium maiores, deleniti non. Atque molestias nobis dolorem quam dolor quasi ullam similique recusandae incidunt ratione quae, suscipit eum?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum eum accusantium maiores, deleniti non. Atque molestias nobis dolorem quam dolor quasi ullam similique recusandae incidunt ratione quae, suscipit eum?,Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laborum eum accusantium maiores, deleniti non. Atque molestias nobis dolorem quam dolor quasi ullam similique recusandae incidunt ratione quae, suscipit eum?",

        imageUrl: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2016_49/1825346/161208-trump-wrestling-mn-1056.jpg",
        source: "The Washington Post",
        date: "19/03/2001"
    };  // Destructure the state

    return (
        <div id='article-body' className='center-div'>

            <h1>{title || 'No Title Provided'}</h1>
            <h2>{source || 'No Source Provided'}<hr /></h2><br />

            {imageUrl && <img src={imageUrl} alt={`${title} image`} />}

            <h3>{date || 'No Date Provided'}</h3>
            <p>{body || 'No Body Content'}</p>
        </div>
    );
}

export default ArticlePage;
