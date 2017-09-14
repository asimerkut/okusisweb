import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuYolcu } from './oku-yolcu.model';
import { OkuYolcuService } from './oku-yolcu.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-yolcu',
    templateUrl: './oku-yolcu.component.html'
})
export class OkuYolcuComponent implements OnInit, OnDestroy {
okuYolcus: OkuYolcu[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuYolcuService: OkuYolcuService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuYolcuService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuYolcus = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuYolcus();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuYolcu) {
        return item.id;
    }
    registerChangeInOkuYolcus() {
        this.eventSubscriber = this.eventManager.subscribe('okuYolcuListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
