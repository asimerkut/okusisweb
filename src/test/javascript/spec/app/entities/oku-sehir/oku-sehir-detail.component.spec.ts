/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { OkusisTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { OkuSehirDetailComponent } from '../../../../../../main/webapp/app/entities/oku-sehir/oku-sehir-detail.component';
import { OkuSehirService } from '../../../../../../main/webapp/app/entities/oku-sehir/oku-sehir.service';
import { OkuSehir } from '../../../../../../main/webapp/app/entities/oku-sehir/oku-sehir.model';

describe('Component Tests', () => {

    describe('OkuSehir Management Detail Component', () => {
        let comp: OkuSehirDetailComponent;
        let fixture: ComponentFixture<OkuSehirDetailComponent>;
        let service: OkuSehirService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [OkusisTestModule],
                declarations: [OkuSehirDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    OkuSehirService,
                    JhiEventManager
                ]
            }).overrideTemplate(OkuSehirDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(OkuSehirDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(OkuSehirService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new OkuSehir(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.okuSehir).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
