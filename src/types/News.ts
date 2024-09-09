interface NewsData {
    title: string,
    body: string,
    imageUrl: string;

}


interface newsContextType {
    articles: NewsData[],
    getArticles: () => void,
}

export default NewsData;