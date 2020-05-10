import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img-post',
  templateUrl: './img-post.component.html',
  styleUrls: ['./img-post.component.scss']
})
export class ImgPostComponent implements OnInit {

  @Input() image;

  constructor() { }

  ngOnInit(): void {
  }

}
