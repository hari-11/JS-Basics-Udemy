function Blogpost(title, body, author ){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views =0;
    this.comments = [];
    this.isLive = false
}

const bP = new Blogpost('a','b','c');
console.log(bP);