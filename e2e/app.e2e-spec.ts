import { RentHousePage } from './app.po';

describe('rent-house App', function() {
  let page: RentHousePage;

  beforeEach(() => {
    page = new RentHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
