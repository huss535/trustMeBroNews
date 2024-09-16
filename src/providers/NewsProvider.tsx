import { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsData from "../types/News";

export const NewsContext = createContext<NewsData[] | null>(null);

const NewsProvider = ({ children }: any) => {
    const [newsData, setNewsData] = useState<NewsData[] | null>(null);

    useEffect(() => {
        const backendServer = import.meta.env.VITE_BACKEND;
        console.log(backendServer + "/getArticles")
        axios.get(backendServer + "/getArticles").then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })



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