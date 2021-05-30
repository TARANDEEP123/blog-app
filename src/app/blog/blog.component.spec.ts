import { blog } from './model/blog';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
let details:blog[];
describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have 'Blog Component' as blog`, (() => {
  fixture = TestBed.createComponent(BlogComponent);
  component = fixture.debugElement.componentInstance;
  expect(component.blogData).toEqual(details);
}));
});
