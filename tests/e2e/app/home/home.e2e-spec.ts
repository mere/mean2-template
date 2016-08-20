import { HomePage } from './home.po';

describe('Page: Home', function () {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display paragraph', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('This is a very simple paragraph on on the homepage.');
    });
});
