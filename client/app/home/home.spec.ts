import { TestBed, async, inject } from '@angular/core/testing';
import { HomeComponent } from './home.component';

describe('Homepage', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ HomeComponent ]
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
