export class Post {
    private _title: string;
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    private _content: string;
    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
    private _loveIts: number;
    public get loveIts(): number {
        return this._loveIts;
    }
    public set loveIts(value: number) {
        this._loveIts = value;
    }
    private _created_at: Date;
    public get created_at(): Date {
        return this._created_at;
    }
    public set created_at(value: Date) {
        this._created_at = value;
    }
    constructor(a,b,c,d)
     {
         this._title =a;
         this._content =b;
         this._loveIts =c;
         this._created_at =d;
     }

  }