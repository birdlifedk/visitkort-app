import { VisitkortAppPage } from './app.po';

describe('visitkort-app App', () => {
  let page: VisitkortAppPage;

  beforeEach(() => {
    page = new VisitkortAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
