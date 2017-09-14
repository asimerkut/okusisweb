import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuOkul } from './oku-okul.model';
import { OkuOkulService } from './oku-okul.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-okul',
    templateUrl: './oku-okul.component.html'
})
export class OkuOkulComponent implements OnInit, OnDestroy {
okuOkuls: OkuOkul[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuOkulService: OkuOkulService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuOkulService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuOkuls = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuOkuls();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuOkul) {
        return item.id;
    }
    registerChangeInOkuOkuls() {
        this.eventSubscriber = this.eventManager.subscribe('okuOkulListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
