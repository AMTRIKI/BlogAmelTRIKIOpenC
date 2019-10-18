import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }
  @Input() titre:string;
  @Input() laDate:Date;
  @Input() contenu: string;
  @Input() loveIts:number;

  ngOnInit() {
  }
  onLove()
  {
    this.loveIts ++;
  }

  onDislike()
  {
    this.loveIts --;
  }
}
