import { useContext } from "react";
import NewsArticle from "../components/NewsArticle";
import TopBar from "../components/TopBar";
import { NewsContext } from "../providers/NewsProvider";
import NewsData from "../types/News";

const NewsPage = () => {
    const data: NewsData[] | null = useContext(NewsContext);
    console.log(data);
    return (
        <>
            <div className="center-grid">
                <div className="page-body">
                    {data && data.length > 0 ? (
                        data.map((article, index) =>
                            index === 0 ? (
                                <NewsArticle
                                    key={index}
                                    title={article.title}
                                    imageUrl={article.imageUrl}
                                    isReal={true}
                                    id="article-header"
                                />
                            ) : (
                                <NewsArticle
                                    key={index}
                                    id={`${index}`}
                                    title={article.title}
                                    imageUrl={article.imageUrl}
                                    isReal={true}
                                />
                            )
                        )
                    ) : (
                        <p>No news available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default NewsPage;
