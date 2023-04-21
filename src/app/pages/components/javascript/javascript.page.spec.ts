import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavascriptPage } from './javascript.page';

describe('JavascriptPage', () => {
  let component: JavascriptPage;
  let fixture: ComponentFixture<JavascriptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JavascriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
