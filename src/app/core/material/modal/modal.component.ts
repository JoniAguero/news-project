import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() data: any;
  @Output() callback = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  back() {
    this.callback.emit(false);
  }

  accept() {
    this.callback.emit(true);

  }

}
