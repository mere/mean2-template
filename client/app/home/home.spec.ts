import { TestBed, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

describe('Component: Home', () => {
    let fixture, element, component;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HomeModule ]
        });
    });

    // Setup access to component elements.
    beforeEach(async(() => {
        TestBed.compileComponents().then(() => {
            fixture = TestBed.createComponent(HomeComponent);
            element = fixture.nativeElement;
            component = fixture.componentInstance;
        });
    }));

    describe('Instantiation', () => {
        it('should create the homepage', () => {
            expect(component).toBeDefined();
        });
    });
});
