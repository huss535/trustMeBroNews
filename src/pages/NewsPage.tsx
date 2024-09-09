import NewsArticle from "../components/NewsArticle";
import TopBar from "../components/TopBar";

const NewsPage = () => {

    return (

        <>
            <TopBar />
            <div id="center-div">
                <div className="page-body">


                    <NewsArticle
                        id="article-header"
                        imageUrl="data:image/jpeg;base64,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"
                        isReal={true}
                        title="Obi-wan kenobi found on a remote planet in the outer rim" />

                    <NewsArticle
                        imageUrl="data:image/jpeg;base64,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"
                        isReal={true}
                        title="Obi-wan kenobi found on a remote planet in the outer rim" />
                    <NewsArticle
                        imageUrl="data:image/jpeg;base64,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"
                        isReal={true}
                        title="Obi-wan kenobi found on a remote planet in the outer rim" />
                    <NewsArticle
                        imageUrl="data:image/jpeg;base64,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"
                        isReal={true}
                        title="Obi-wan kenobi found on a remote planet in the outer rim" />
                    <NewsArticle
                        imageUrl="data:image/jpeg;base64,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"
                        isReal={true}
                        title="Obi-wan kenobi found on a remote planet in the outer rim" />

                </div>
            </div>


        </>

    );
}


export default NewsPage;