import { useLocation } from 'react-router-dom';
import NewsData, { Author } from '../types/News';


const formatBodyContent = (body: string) => {
    // Split body text by double newlines for paragraphs
    const paragraphs = body.split(/\n{2,}/).filter(paragraph => paragraph.trim() !== "");

    return paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
    ));
};

const processAuthors = (authors: Author[]) => {
    return authors.filter((author) => author.name !== "http" && author.name !== "https");
};

const ArticlePage = () => {
    const location = useLocation();
    /*     const { title, body, imageUrl, source, date } = location.state || {};  // Destructure the state
     */
    const { state } = location;
    const newsData = state as NewsData;
    const authors: Author[] = processAuthors(newsData.authors);

    return (
        <div id='article-body' className='center-div'>

            <h1>{newsData.title || 'No Title Provided'}</h1>

            {newsData.source ? <><h2>Source: {newsData.source.title}</h2>

            </> : null}

            {authors.length > 0 ? <> <h2>Author(s): {authors.map(author => author.name).join(', ')}</h2>   </> : null}

            <br />

            {newsData.imageUrl && <img src={newsData.imageUrl} alt={`${newsData.title} image`} />}

            <h3>{newsData.date.toString() || 'No Date Provided'}</h3>


            {newsData.body ? (

                formatBodyContent(newsData.body)
            ) : (
                <p>No Body Content</p>
            )}
        </div>
    );
}

export default ArticlePage;
