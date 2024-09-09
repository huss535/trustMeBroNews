import { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsData from "../types/News";

export const NewsContext = createContext<NewsData[] | null>(null);

const NewsProvider = ({ children }: any) => {
    const [newsData, setNewsData] = useState<NewsData[] | null>(null);

    useEffect(() => {

        let data = {
            "query": {
                "$query": {
                    "$and": [
                        {
                            "conceptUri": "http://en.wikipedia.org/wiki/Technology"
                        },
                        {
                            "conceptUri": "http://en.wikipedia.org/wiki/Health_care"
                        },
                        {
                            "conceptUri": "http://en.wikipedia.org/wiki/Education"
                        },
                        {
                            "conceptUri": "http://en.wikipedia.org/wiki/Politics"
                        },
                        {
                            "conceptUri": "http://en.wikipedia.org/wiki/Government"
                        },
                        {
                            "lang": "eng"
                        }
                    ]
                },
                "$filter": {
                    "forceMaxDataTimeWindow": "31"
                }
            },
            "resultType": "articles",
            "articlesSortBy": "rel",
            "includeArticleEventUri": false,
            "includeArticleLocation": true,
            "includeArticleImage": true,
            "apiKey": import.meta.env.VITE_NEWS_KEY
        };

        axios.post("https://www.newsapi.ai/api/v1/article/getArticles", data)
            .then((response) => {
                const arrayOfArticles = response.data.articles.results;

                for (let i = 0; i < arrayOfArticles.length; i++) {
                    const articleData: NewsData = {
                        title: arrayOfArticles[i].title,
                        body: arrayOfArticles[i].body,
                        imageUrl: arrayOfArticles[i].image,
                    };

                    setNewsData((prevNewsData) => prevNewsData ? [...prevNewsData, articleData] : [articleData]);
                }

                console.log(response.data);
            })
            .catch((error) => console.log(error));



    }, []);

    useEffect(() => {
        if (newsData)
            console.log(`testing ${newsData[4].title}`)
    }, [newsData]);



    return (

        <NewsContext.Provider value={newsData}>

            {children}
        </NewsContext.Provider>
    );


}


export default NewsProvider;