import { Component, OnInit, Input } from '@angular/core';
import { New } from 'src/app/core/models/new.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() new: New;

  constructor() { }

  ngOnInit(): void {
  }

  goToNew(url: string) {
    window.open(url, "_blank");
  }

}
