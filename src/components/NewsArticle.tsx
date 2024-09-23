import { useNavigate } from "react-router-dom";
import NewsData from "../types/News";
import { useState } from "react";

interface ArticleProps {
    newsData: NewsData;
    id?: string;
    className?: string;
}

const NewsArticle = (props: ArticleProps) => {
    const { newsData, id, className } = props;
    const navigate = useNavigate();
    const [isOverlayVisible, setOverlayVisible] = useState(false);
    const [isRealButton, setIsRealButton] = useState(false);


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (e.currentTarget.name == "real") {
            setIsRealButton(true);
        } else {
            setIsRealButton(false);
        }

        setOverlayVisible(true);
    };

    const handleGoBack = () => {
        setOverlayVisible(false);
    };

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate("/article", { state: newsData });
    };

    return (
        <div id={id} className={`article ${className}`}>
            <img src={newsData.imageUrl} alt={newsData.title} />
            <a onClick={handleNavigation}>{newsData.title}</a>
            <div>
                <button name="fake" onClick={handleClick} className="main-button">
                    Fake
                </button>
                <button name="real" onClick={handleClick} className="main-button">
                    Real
                </button>
            </div>

            <div className={`article-overlay ${isOverlayVisible ? 'visible' : ''}`}>
                {/* Conditional Rendering */}
                {newsData.isReal ? (
                    isRealButton ? (
                        <h1>Good job, this is indeed true!</h1>  // Correct, Real article and Real button clicked
                    ) : (
                        <h1>No, this is in fact real!</h1> // Wrong, Real article but Fake button clicked
                    )
                ) : (
                    !isRealButton ? (
                        <h1>Good job, this is indeed fake!</h1> // Correct, Fake article and Fake button clicked
                    ) : (
                        <h1>No, this is actually fake!</h1> // Wrong, Fake article but Real button clicked
                    )
                )}

                <button onClick={handleGoBack} className="main-button">Go Back</button>
            </div>
        </div>
    );
}

export default NewsArticle;
