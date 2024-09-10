
interface article {
    imageUrl: string,
    title: string,
    isReal: boolean,
    id?: string
}




const NewsArticle = (props: article) => {
    const { imageUrl, title, isReal } = props;

    return (
        <div className="article-container">
            <div id={props.id} className="article">

                <div className="article-front">
                    <img src={imageUrl} />
                    <h2>{title}</h2>
                    <div>
                        <button className="article-button fake-button">Fake</button>
                        <button className="article-button true-button">Real</button>
                    </div>

                </div>
                <div className="article-side"></div>

                <div className="article-back"></div>

            </div>
        </div>


    );
}


export default NewsArticle;