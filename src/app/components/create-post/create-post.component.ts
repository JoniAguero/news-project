import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit, OnChanges {

  @Input() images;
  titleFormGroup: FormGroup;  
  descriptionFormGroup: FormGroup;
  imageFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formBuilder();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    
  }

  formBuilder() {
    this.titleFormGroup = this._formBuilder.group({
      title: ['', Validators.required]
    });
    this.descriptionFormGroup = this._formBuilder.group({
      description: ['', Validators.required]
    });
    this.imageFormGroup = this._formBuilder.group({
      image: ['', Validators.required]
    });
  }

  selectImage(index) {
    console.log(index);
    
  }

}
