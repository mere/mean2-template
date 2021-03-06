import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module'

describe('Component: App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        });
    });

    describe('Instantiation', () => {
        it('should create the app', () => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(AppComponent);
                let component = fixture.componentInstance;

                expect(component).toBeDefined();
            });
        })
    });
});
