import { HomePage } from './home.po';

describe('Page: Home', function () {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
    });

    it('should display paragraph saying this is the homepage', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('This is the homepage');
    });
});
