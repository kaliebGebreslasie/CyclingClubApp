import { CyclingClubAppPage } from './app.po';

describe('cycling-club-app App', () => {
  let page: CyclingClubAppPage;

  beforeEach(() => {
    page = new CyclingClubAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
