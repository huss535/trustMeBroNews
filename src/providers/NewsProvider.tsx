import { createContext, useEffect, useState } from "react";
import axios from "axios";
import NewsData, { NewsEntry } from "../types/News";

export const NewsContext = createContext<NewsEntry[] | null>(null);

const NewsProvider = ({ children }: any) => {
    const [newsData, setNewsData] = useState<NewsEntry[] | null>(null);

    // Function to merge fake news attributes
    function mergeFakeNewsAttributes(articles: NewsData[], fakeNews: any) {
        return articles.map((article) => {
            const fakeArticle = fakeNews.find((fake: any) => fake.uri == article.uri);
            console.log(fakeArticle);
            if (fakeArticle) {
                return {
                    ...article,
                    title: fakeArticle.title, // Overwrite with fake title
                    body: fakeArticle.body, // Overwrite with fake body
                    date: fakeArticle.date, // Overwrite with fake date
                    isReal: false, // Mark as fake
                };
            }
            return article; // Return unchanged if no match
        });
    }

    // Function to fetch fake news and return it
    const getFakeNews = async (news: NewsData[]) => {
        try {
            const hijackedNews = news.slice(6); // Get a slice of the articles
            const articleObjects = hijackedNews.map((article) => ({
                uri: article.uri,
                title: article.title,
                body: article.body,
                date: article.date.toISOString(), // Ensure date is formatted as string
            }));

            // POST request to fetch the fake news data
            const response = await axios.post(
                `https://42fsimrhfl.execute-api.us-east-1.amazonaws.com/fakeNews`,
                { articles: articleObjects }
            );

            // Parse and return the response data
            const responseData = response.data;

            const firstIndex = responseData.indexOf("[");
            const lastIndex = responseData.lastIndexOf("]");
            const cleanData = responseData.substring(firstIndex, lastIndex + 1);
            console.log(cleanData)

            return JSON.parse(cleanData);
        } catch (error) {
            console.error("Error fetching fake news:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const backendServer = import.meta.env.VITE_BACKEND;
                console.log(backendServer + "/articles");

                const response = await axios.get(backendServer + "/articles");
                const articles: NewsEntry[] = response.data.map((item: any) => ({
                    uri: item.uri,
                    title: item.title,
                    body: item.body,
                    imageUrl: item.imageUrl,
                    source: {
                        uri: item.source.uri,
                        dataTypes: item.source.dataTypes,
                        title: item.source.title,
                    },
                    date: new Date(item.date),
                    authors: item.authors,
                    isReal: item.isReal !== undefined ? item.isReal : true,
                    categories: Array.isArray(item.categories)
                        ? item.categories.map((category: any) => category.label)
                        : [],
                }));

                // Fetch fake news and merge with real articles
                const fakeNews = await getFakeNews(articles);
                const updatedNews = mergeFakeNewsAttributes(articles, fakeNews);
                console.log(updatedNews);
                // Update state with the final merged news
                setNewsData(updatedNews);
            } catch (error) {
                console.log(error);
            }
        };

        fetchNews();
    }, []);

    return (
        <NewsContext.Provider value={newsData}>
            {children}
        </NewsContext.Provider>
    );
};

export default NewsProvider;
