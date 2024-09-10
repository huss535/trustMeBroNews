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
                    "forceMaxDataTimeWindow": "31",
                    "isDuplicate": "skipDuplicates"
                }
            },
            "resultType": "articles",
            "articlesSortBy": "rel",
            "includeArticleEventUri": false,
            "includeArticleLocation": true,
            "includeArticleImage": true,
            "apiKey": "0d6f99c5-3e66-4108-bc88-a70520bbd937"
        };

        /*  axios.post("https://www.newsapi.ai/api/v1/article/getArticles", data)
             .then((response) => {
                 let arrayOfArticles = response.data.articles.results;
 
                 if (arrayOfArticles && arrayOfArticles) {
 
 
                     const articlesToSet = arrayOfArticles.slice(0, 7).map((article: any) => ({
                         title: article.title,
                         body: article.body,
                         imageUrl: article.image,
                     }));
                     setNewsData(articlesToSet);
 
 
                 }
 
                 console.log(response.data);
             })
             .catch((error) => console.log(error));
  */


    }, []);
    /* 
        useEffect(() => {
            if (newsData)
                console.log(`testing ${newsData[4].title}`)
        }, [newsData]); */



    return (

        <NewsContext.Provider value={newsData}>

            {children}
        </NewsContext.Provider>
    );


}


export default NewsProvider;