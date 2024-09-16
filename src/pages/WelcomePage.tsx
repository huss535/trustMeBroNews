import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const WelcomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/news");
    }

    return (
        <>
            <TopBar />
            <div id="intro-body">
                <h1>
                    Disclaimer
                </h1>

                <p> Hello! Just a quick disclaimer: this is meant to be a fun experiment and by no means should it be considered a reputable news source. With the rise of falsely generated AI news and even instances where a presidential candidate used AI-generated images to fake support from Swifties, I wanted to see if, with minimal resources, I could generate false news that would still be believable to readers.
                </p>
                <h1>
                    Why "Foxed News"?
                </h1>
                <p>

                    According to the Cambridge Dictionary, "foxed" means to confuse someone or to be too difficult for someone to understand. Informally, it can also mean to deceive or to be drunk. The name "Foxed News" felt like an obvious inspiration after reflecting on a brand that embodies everything wrong and absurd about how news is often handled today.

                </p>

                <button
                    className="main-button"
                    onClick={handleClick}
                >Get Started
                </button>

            </div>
        </>

    );
}


export default WelcomePage;