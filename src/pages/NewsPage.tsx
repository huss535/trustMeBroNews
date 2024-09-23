import { useContext, useEffect, useState } from "react";
import NewsArticle from "../components/NewsArticle";
import TopBar from "../components/TopBar";
import { NewsContext } from "../providers/NewsProvider";
import { NewsEntry } from "../types/News";
import { ThreeDot } from "react-loading-indicators";

// Hook to preload images
const useImagePreloader = (imageUrls: string[]) => {
    const [loaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loadedImages = 0;
        const totalImages = imageUrls.length;

        if (totalImages === 0) {
            setIsLoaded(true);
            return;
        }

        imageUrls.forEach((url) => {
            const img = new Image();
            img.src = url;

            img.onload = () => {
                loadedImages += 1;
                if (loadedImages === totalImages) {
                    setIsLoaded(true);
                }
            };

            img.onerror = () => {
                loadedImages += 1; // Count even if the image fails to load
                if (loadedImages === totalImages) {
                    setIsLoaded(true);
                }
            };
        });
    }, [imageUrls]);

    return loaded;
};

const NewsPage = () => {
    const data: NewsEntry[] | null = useContext(NewsContext);
    console.log(data);

    const imageUrls = data ? data.map((article) => article.imageUrl) : [];

    // Preload all images before rendering the news articles
    const imagesLoaded: boolean = useImagePreloader(imageUrls);

    return (
        <>
            {!imagesLoaded ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
                    <ThreeDot variant="bounce" color="#e83343" size="large" text="fetching news" />
                </div>
            ) : data && data.length > 0 ? (
                <div className="center-grid">
                    <div className="page-body">
                        {data.map((article, index) =>
                            index === 0 ? (
                                <NewsArticle key={index} newsData={article} id="article-header" />
                            ) : (
                                <NewsArticle key={index} id={`${index}`} newsData={article} />
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
                    <ThreeDot variant="bounce" color="#e83343" size="large" text="fetching news" />
                </div>
            )}
        </>
    );
};

export default NewsPage;
