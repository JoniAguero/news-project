import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'snack-bar-component',
  template: `
    <span [ngStyle]="data.style">
      {{ data.text }}
    </span>`,
})
export class SnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    console.log(data);
  }
}
