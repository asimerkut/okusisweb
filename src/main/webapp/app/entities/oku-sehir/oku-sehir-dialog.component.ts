import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { OkuSehir } from './oku-sehir.model';
import { OkuSehirPopupService } from './oku-sehir-popup.service';
import { OkuSehirService } from './oku-sehir.service';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-oku-sehir-dialog',
    templateUrl: './oku-sehir-dialog.component.html'
})
export class OkuSehirDialogComponent implements OnInit {

    okuSehir: OkuSehir;
    isSaving: boolean;

    okusehirs: OkuSehir[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private okuSehirService: OkuSehirService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.okuSehirService.query()
            .subscribe((res: ResponseWrapper) => { this.okusehirs = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.okuSehir.id !== undefined) {
            this.subscribeToSaveResponse(
                this.okuSehirService.update(this.okuSehir));
        } else {
            this.subscribeToSaveResponse(
                this.okuSehirService.create(this.okuSehir));
        }
    }

    private subscribeToSaveResponse(result: Observable<OkuSehir>) {
        result.subscribe((res: OkuSehir) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError());
    }

    private onSaveSuccess(result: OkuSehir) {
        this.eventManager.broadcast({ name: 'okuSehirListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(error: any) {
        this.alertService.error(error.message, null, null);
    }

    trackOkuSehirById(index: number, item: OkuSehir) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-oku-sehir-popup',
    template: ''
})
export class OkuSehirPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private okuSehirPopupService: OkuSehirPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.okuSehirPopupService
                    .open(OkuSehirDialogComponent as Component, params['id']);
            } else {
                this.okuSehirPopupService
                    .open(OkuSehirDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
