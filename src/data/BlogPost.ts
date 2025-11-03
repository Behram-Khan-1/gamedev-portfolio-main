export default class BlogPost {
    id: string;
    name: string;
    coverImage: string;
    content: string;
    excerpt: string;
    publishDate: string;
    tags: string[];
    readTime = "5 min read";  // Remove : string
    author = "Your Name";     // Remove : string

    constructor(
        id: string,
        name: string,
        coverImage: string,
        content: string,
        excerpt: string,
        publishDate: string,
        tags: string[] = [],
        readTime = "5 min read",
        author = "Your Name"
    ) {
        this.id = id;
        this.name = name;
        this.coverImage = coverImage;
        this.content = content;
        this.excerpt = excerpt;
        this.publishDate = publishDate;
        this.tags = tags;
        this.readTime = readTime;
        this.author = author;
    }
}