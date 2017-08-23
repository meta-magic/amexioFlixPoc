import { TechmpocPage } from './app.po';

describe('amexioFlixPoc App', () => {
  let page: TechmpocPage;

  beforeEach(() => {
    page = new TechmpocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
