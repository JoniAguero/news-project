import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgPostComponent } from './img-post.component';

describe('ImgPostComponent', () => {
  let component: ImgPostComponent;
  let fixture: ComponentFixture<ImgPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
