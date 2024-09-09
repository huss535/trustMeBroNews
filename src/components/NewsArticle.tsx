
interface article {
    imageUrl: string,
    title: string,
    isReal: boolean,
    id?: string
}




const NewsArticle = (props: article) => {
    const { imageUrl, title, isReal } = props;

    return (

        <div id={props.id} className="article">
            <img src={imageUrl} />
            <h2>{title}</h2>
            <div>
                <button className="article-button fake-button">Fake</button>
                <button className="article-button true-button">Real</button>
            </div>

        </div>


    );
}


export default NewsArticle;