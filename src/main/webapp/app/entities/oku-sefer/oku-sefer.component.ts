import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuSefer } from './oku-sefer.model';
import { OkuSeferService } from './oku-sefer.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-sefer',
    templateUrl: './oku-sefer.component.html'
})
export class OkuSeferComponent implements OnInit, OnDestroy {
okuSefers: OkuSefer[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuSeferService: OkuSeferService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuSeferService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuSefers = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuSefers();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuSefer) {
        return item.id;
    }
    registerChangeInOkuSefers() {
        this.eventSubscriber = this.eventManager.subscribe('okuSeferListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
