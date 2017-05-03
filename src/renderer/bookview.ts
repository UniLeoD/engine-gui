class BookView extends engine.DisplayObjectContainer {
    static VIEW_WIDTH = 300;
    static VIEW_HEIGHT = 150;
    static TEXT_ALIGN = 15;
    static BG_ALPHA = 0.3;
    bg: engine.Shape;
    bookName: engine.TextField;
    author: engine.TextField;
    cover: engine.Bitmap;

    constructor() {
        super();
        this.bg = new engine.Shape();
        this.bg.beginFill("#000000");
        this.bg.drawRect(0, 0, BookView.VIEW_WIDTH, BookView.VIEW_HEIGHT);
        this.bg.endFill();
        this.bg.alpha = BookView.BG_ALPHA;
        this.addChild(this.bg);

        this.bookName = new engine.TextField();
        this.bookName.color = "#FFFFFF";
        this.bookName.x = this.bookName.y = BookView.TEXT_ALIGN;
        this.addChild(this.bookName);

        this.author = new engine.TextField();
        this.author.color = "#FFFFFF";
        this.author.x = BookView.TEXT_ALIGN;
        this.author.y = BookView.TEXT_ALIGN * 4;
        this.addChild(this.author);

        this.cover = new engine.Bitmap();
        this.cover.x = 200;
        this.cover.y = BookView.TEXT_ALIGN;
        this.cover.texture = engine.RES.getRes("no-cover.jpg");
        this.addChild(this.cover);

    }
}
