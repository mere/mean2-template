export class HomePage {
    navigateTo() {
        return browser.get('/');
    }

    getParagraphText() {
        return element(by.css('home p')).getText();
    }
}
