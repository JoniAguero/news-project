import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from '../modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MaterialService } from '../../material.service';
import { Post } from 'src/app/core/models/post.model';

@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {

  postForm: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    private fb: FormBuilder,
    private _materialService: MaterialService,
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

  get f() { return this.postForm.controls; }

  createForm() {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  submit() {
    if(!this.postForm.valid) {
      this._materialService.openSnackBar('Debe completar ambos campos. Descripción debe tener al menos 30 caracteres.');
    } else {
      this.dialogRef.close(this.postForm);
    }
  }
  
}
