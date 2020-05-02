import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from '../modal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaterialService } from '../../material.service';

@Component({
  selector: 'app-comment-modal',
  templateUrl: './comment-modal.component.html',
  styleUrls: ['./comment-modal.component.scss']
})
export class CommentModalComponent implements OnInit {

  commentForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm();
    }

  ngOnInit(): void {}

  callback(e: boolean) {
    if(e) {
      this.submit();
    } else {
      this.dialogRef.close();
    }
  }

  get f() { return this.commentForm.controls; }

  createForm() {
    this.commentForm = this.fb.group({
      description: ['', Validators.required],
      rating: ['']
    });
  }

  submit() {
    this.dialogRef.close(this.commentForm);
  }

}
