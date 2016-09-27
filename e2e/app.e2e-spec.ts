import { WizardPage } from './app.po';

describe('wizard App', function() {
  let page: WizardPage;

  beforeEach(() => {
    page = new WizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
