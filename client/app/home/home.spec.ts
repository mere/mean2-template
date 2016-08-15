import { TestBed, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module'

describe('Component: Home', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HomeModule ]
        });
    });

    it('should create the homepage',
        async(() => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(HomeComponent);
                let component = fixture.componentInstance;

                expect(component).toBeDefined();
            });
        })
    );

    it('should have correct title value',
        async(() => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(HomeComponent);
                let component = fixture.componentInstance;

                expect(component.title).toEqual('Homepage');
            });
        })
    );
});
