import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptArrayMethodsComponent } from './javascript-array-methods.component';

describe('JavascriptArrayMethodsComponent', () => {
  let component: JavascriptArrayMethodsComponent;
  let fixture: ComponentFixture<JavascriptArrayMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavascriptArrayMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptArrayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
