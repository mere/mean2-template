import { AppPage } from './app.po';

describe('Page: Main App', function () {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display title text', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to MEAN2!');
    });
});
