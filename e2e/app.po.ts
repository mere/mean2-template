export class AppPage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('mean2-app h1')).getText();
    }
}
