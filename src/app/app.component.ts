import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService) {}
  
  ngOnInit(): void { 
    this.translateService.use('en');
  }
}
