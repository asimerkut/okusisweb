import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuSehir } from './oku-sehir.model';
import { OkuSehirService } from './oku-sehir.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-sehir',
    templateUrl: './oku-sehir.component.html'
})
export class OkuSehirComponent implements OnInit, OnDestroy {
okuSehirs: OkuSehir[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuSehirService: OkuSehirService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuSehirService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuSehirs = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuSehirs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuSehir) {
        return item.id;
    }
    registerChangeInOkuSehirs() {
        this.eventSubscriber = this.eventManager.subscribe('okuSehirListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
