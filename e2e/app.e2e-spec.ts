import { Sergeyukhanov.Github.IoPage } from './app.po';

describe('sergeyukhanov.github.io App', () => {
  let page: Sergeyukhanov.Github.IoPage;

  beforeEach(() => {
    page = new Sergeyukhanov.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
