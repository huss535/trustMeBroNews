
interface article {
    imageUrl: string,
    title: string,
    isReal: boolean,
    id?: string
    className?: string
}




const NewsArticle = (props: article) => {
    const { imageUrl, title, isReal, id, className } = props;

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {

        if (id) {
            const component = document.getElementById(id);
            const buttonTitle = (e.currentTarget as HTMLButtonElement).textContent;
            if (buttonTitle == "Go Back" && component) {

                component.classList.remove("article-clicked");
                component.classList.remove("article-back-real");
                component.classList.remove("article-back-fake");

            } else if (component) {
                const backOfCard = component.querySelector(".article-back");

                if (isReal && backOfCard) {
                    backOfCard.classList.add("article-back-real");

                } else if (backOfCard) {
                    backOfCard.classList.add("article-back-fake");
                }
                component.classList.add("article-clicked");



            }





        }



    }

    return (
        <div id={props.id} className={`article ${className}`}>


            <img src={imageUrl} />
            <a href="">{title}</a>
            <div>
                <button onClick={handleClick} className="article-button fake-button">Fake</button>
                <button onClick={handleClick} className="article-button true-button">Real</button>


            </div>




            {/*   <button onClick={handleClick} className="main-button">Go Back</button>

               */}

        </div>



    );
}


export default NewsArticle;