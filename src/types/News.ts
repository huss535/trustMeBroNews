interface newsData {
    title: string,
    body: string,
    imageUrl: string;

}


interface newsContextType {
    articles: newsData[],
    getArticles: () => void,
}