interface NewsData {
    title: string;         // Title of the news article
    body: string;          // Main content of the article
    imageUrl: string;      // URL of the related image
    source: {              // Source details

        uri: string,
        dataTypes: string,
        title: string
    };
    date: Date;            // Date of the article
}



export default NewsData;