import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlickrImageContainerComponent } from './flickr-image-container.component';

describe('FlickrImageContainerComponent', () => {
  let component: FlickrImageContainerComponent;
  let fixture: ComponentFixture<FlickrImageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlickrImageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlickrImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
