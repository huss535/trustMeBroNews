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
            <TopBar />
            <div id="center-div">
                <div className="page-body">
                    <NewsArticle
                        key={1}
                        title="Yes this is a trial"
                        imageUrl="Notworking"
                        isReal={true}
                    />
                    {/*  {data && data.length > 0 ? (
                        data.map((article, index) => (
                            <NewsArticle
                                key={index}
                                title={article.title}
                                imageUrl={article.imageUrl}
                                isReal={true}
                            />
                        ))
                    ) : (
                        <p>No news available</p>
                    )} */}
                </div>
            </div>
        </>
    );
};

export default NewsPage;
