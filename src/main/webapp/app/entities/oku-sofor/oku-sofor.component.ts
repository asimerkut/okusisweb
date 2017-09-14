import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuSofor } from './oku-sofor.model';
import { OkuSoforService } from './oku-sofor.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-sofor',
    templateUrl: './oku-sofor.component.html'
})
export class OkuSoforComponent implements OnInit, OnDestroy {
okuSofors: OkuSofor[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuSoforService: OkuSoforService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuSoforService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuSofors = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuSofors();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuSofor) {
        return item.id;
    }
    registerChangeInOkuSofors() {
        this.eventSubscriber = this.eventManager.subscribe('okuSoforListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
