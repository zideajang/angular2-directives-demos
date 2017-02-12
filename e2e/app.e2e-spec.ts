import { Angular2DirectivesDemosPage } from './app.po';

describe('angular2-directives-demos App', function() {
  let page: Angular2DirectivesDemosPage;

  beforeEach(() => {
    page = new Angular2DirectivesDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
