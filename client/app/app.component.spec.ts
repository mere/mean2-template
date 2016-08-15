import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module'

describe('Component: App', () => {
    let fixture, element, component;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ AppModule ]
        });
    });

    // Setup access to component elements.
    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(AppComponent);
            element = fixture.nativeElement;
            component = fixture.componentInstance;

            expect(component).toBeDefined();
        });
    }));

    describe('Instantiation', () => {
        it('should create the app', () => {
            expect(component).toBeDefined();
        });
    });
});
