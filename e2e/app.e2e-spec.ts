import { AngularFlickrGalleryPage } from './app.po';

describe('angular-flickr-gallery App', () => {
  let page: AngularFlickrGalleryPage;

  beforeEach(() => {
    page = new AngularFlickrGalleryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
