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
                let homeCompiled = fixture.nativeElement;
                fixture.detectChanges();

                expect(homeCompiled).toBeDefined();
            });
        })
    );

    it('should have correct title value',
        async(() => {
            TestBed.compileComponents().then(() => {
                let fixture = TestBed.createComponent(HomeComponent);
                let homeCompiled = fixture.nativeElement;
                let homeComponent = fixture.debugElement.children[0].componentInstance;
                fixture.detectChanges();

                expect(homeComponent.title).toEqual('Homepage');
            });
        })
    );
});
