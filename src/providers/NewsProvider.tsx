import { createContext, useState } from "react";

export const NewsContext = createContext<newsData[] | null>(null);

const NewsProvider = ({ children }: any) => {
    const [newsData, setNewsData] = useState<newsData[] | null>(null);

    return (

        <NewsContext.Provider value={newsData}>

            {children}
        </NewsContext.Provider>
    );


}

export default NewsProvider;