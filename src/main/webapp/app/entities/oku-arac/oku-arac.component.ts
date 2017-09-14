import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuArac } from './oku-arac.model';
import { OkuAracService } from './oku-arac.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-arac',
    templateUrl: './oku-arac.component.html'
})
export class OkuAracComponent implements OnInit, OnDestroy {
okuAracs: OkuArac[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuAracService: OkuAracService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuAracService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuAracs = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuAracs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuArac) {
        return item.id;
    }
    registerChangeInOkuAracs() {
        this.eventSubscriber = this.eventManager.subscribe('okuAracListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
