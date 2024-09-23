import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const WelcomePage = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/news");
    }

    return (
        <div id="intro-body" className="center-div">

            <img src="src/assets/foxedNews.png" />

            <h1>Disclaimer</h1>

            <p>Hello! Just a quick disclaimer: this is meant to be a fun experiment and by no means should it be considered a reputable news source. With the rise of AI-generated news and even instances where a presidential candidate used AI-generated images to fake support from Swifties, I wanted to see if, with minimal resources, I could generate false news that would still seem believable to readers.</p>

            <h1>Why "Foxed News"?</h1>


            <p>For some reason, Fox News was the first source of inspiration I thought about when examining themes of journalistic integrity. Could it be their comically consistent dishonesty, fearmongering, and their relentless pandering to the public's basic fears and hysteria? Who knows.</p>
            <p>Also according to the Cambridge Dictionary, "foxed" means to confuse someone or to be too difficult for someone to understand. Informally, it can also mean to deceive or to be drunk.</p>
            <button
                className="main-button"
                onClick={handleClick}
            >Get Started
            </button>


        </div>

    );
}


export default WelcomePage;