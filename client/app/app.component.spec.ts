import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Component: App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ AppComponent ]
        });
    });

    it('should create the app',
        async(() => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(AppComponent);
                let component = fixture.componentInstance;

                expect(component).toBeDefined();
            });
        })
    );
});
