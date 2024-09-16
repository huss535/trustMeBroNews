
interface article {
    imageUrl: string,
    title: string,
    isReal: boolean,
    id?: string
}




const NewsArticle = (props: article) => {
    const { imageUrl, title, isReal, id } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (id) {

            const buttonTitle = (e.currentTarget as HTMLButtonElement).textContent;
            if (buttonTitle == "Go Back") {

                document.getElementById(id)?.classList.remove("article-clicked");

            } else {

                document.getElementById(id)?.classList.add("article-clicked");

            }





        }



    }

    return (
        <div className="article-container">
            <div id={props.id} className="article">

                <div className="article-front">
                    <img src={imageUrl} />
                    <h2>{title}</h2>
                    <div>
                        <button onClick={handleClick} className="article-button fake-button">Fake</button>
                        <button onClick={handleClick} className="article-button true-button">Real</button>
                    </div>

                </div>
                <div className="article-side"></div>

                <div className="article-back">

                    <button onClick={handleClick} className="main-button">Go Back</button>

                </div>

            </div>
        </div>


    );
}


export default NewsArticle;