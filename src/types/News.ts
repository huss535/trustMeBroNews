interface NewsData {
    uri: string;
    title: string;         // Title of the news article
    body: string;          // Main content of the article
    imageUrl: string;      // URL of the related image
    source: {              // Source details

        uri: string,
        dataTypes: string,
        title: string
    };
    date: Date;
    authors: Author[];
    isReal: boolean;// Date of the article
    categories: string[];


}

export class NewsEntry implements NewsData {
    uri: string;
    title: string;
    body: string;
    imageUrl: string;
    source: {
        uri: string;
        dataTypes: string;
        title: string;
    };
    date: Date;
    authors: Author[];
    isReal: boolean;
    categories: string[]

    constructor(
        uri: string,
        title: string,
        body: string,
        imageUrl: string,
        source: { uri: string; dataTypes: string; title: string },
        date: Date,
        authors: Author[],
        isReal: boolean = true,// Set default value for `isReal` here
        categories: string[]


    ) {
        this.uri = uri,
            this.title = title;
        this.body = body;
        this.imageUrl = imageUrl;
        this.source = source;
        this.date = date;
        this.authors = authors;
        this.isReal = isReal;  // Default to true unless specified otherwise
        this.categories = categories

    }
}

export interface Author {
    uri: string;
    name: string;
    type: string;
    isAgency: boolean;
}



export default NewsData;