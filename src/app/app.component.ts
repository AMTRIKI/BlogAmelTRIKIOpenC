import { Component } from '@angular/core';
import { Post } from './Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allPosts: Array<Post> =  [new Post('Mon premier post',"Lorem ipsum dolor sit amet", 0, new Date(2017,10,24,11,0,0,0)),
  new Post('Mon deuxième post',"Lorem ipsum dolor sit amet", 0, new Date(2017,10,24,11,0,0,0)),
  new Post('Mon troisième post',"Lorem ipsum dolor sit amet", 0, new Date(2017,10,24,11,0,0,0))
 ];
/*
 allPosts =  [{title:'Mon premier post', content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
  loveIts: 0, created_at:new Date()},
 {title:'Mon deuxième post',content:"Lorem ipsum dolor sit amet", loveIts:0, created_at:new Date()},
 {title:'Mon troisième post',content:"Lorem ipsum dolor sit amet", loveIts:0, created_at:new Date()},
];

*/
}
