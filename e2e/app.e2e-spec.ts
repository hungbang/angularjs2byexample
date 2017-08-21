import { Angularjs2byexamplePage } from './app.po';

describe('angularjs2byexample App', function() {
  let page: Angularjs2byexamplePage;

  beforeEach(() => {
    page = new Angularjs2byexamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
