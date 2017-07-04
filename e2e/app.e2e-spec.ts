import { SongbookPage } from './app.po';

describe('songbook App', () => {
  let page: SongbookPage;

  beforeEach(() => {
    page = new SongbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
