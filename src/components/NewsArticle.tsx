
interface article {
    imageUrl: string,
    title: string,
    isReal: boolean
}




const NewsArticle = (props: article) => {
    const { imageUrl, title, isReal } = props;

    return (

        <div className="article">
            <img src={imageUrl} />
            <h2>{title}</h2>
            <div>
                <button></button>
                <button></button>
            </div>

        </div>


    );
}


export default NewsArticle;