import { TourOfHeroesWithCLIPage } from './app.po';

describe('tour-of-heroes-with-cli App', () => {
  let page: TourOfHeroesWithCLIPage;

  beforeEach(() => {
    page = new TourOfHeroesWithCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
