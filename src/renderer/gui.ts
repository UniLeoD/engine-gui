import * as fs from 'fs';
import * as path from 'path';
const Config = require('electron-config');
const config = new Config();
class Main extends engine.DisplayObjectContainer {
    listView: MyListView;

    createGameScene(canvas: engine.ICanvas) {
        this.listView = new MyListView();
        this.addChild(this.listView);
        this.listView.getView = () => { return new BookView(); }
        this.listView.assignmentFunc = (book: book_type, view: BookView) => {
            view.author.text = book.author;
            view.bookName.text = book.name;
            if (book.cover)
                view.cover.texture = engine.RES.getRes(book.cover);
        };
        this.listView.datas = store.books;
        this.listView.updateView();

        var deleteButton = new engine.Bitmap(engine.RES.getRes("delete.png"));
        deleteButton.touchEnabled = true;
        deleteButton.addEventListener(engine.TouchEvent.CLICK, () => {
            //store.books.splice(store.books.length - 1);//删掉最后一个
            store.books=[];
        });
        deleteButton.x = 100;
        deleteButton.y = 500;
        this.addChild(deleteButton);
        engine.Ticker.getInstance().register(() => {
            this.listView.updateView();
        });
    }
}
class MyListView extends engine.listview {
    constructor() {
        super();
    }


}
//load config
type book_type = { "id": number, "name": string, "author": string, "cover": string };

config.store = {
    "books": [
        {
            "id": 1,
            "name": "虵改变了中国",
            "author": "罗伯特·劳伦斯·库恩",
            "cover": "who-changed-china.jpg"
        },
        {
            "id": 2,
            "name": "中华人民共和国香港特别行政区基本法",
            "author": "中央政府？",
            "cover": "basic-law.jpg"
        },
        {
            "id": 3,
            "name": "待定",
            "author": "null",
            "cover": null
        }
    ]
}
let store: { books: book_type[] } = config.store;

//bookList.width=600;
//bookList.height=800;



