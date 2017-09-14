import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuOgrenci } from './oku-ogrenci.model';
import { OkuOgrenciService } from './oku-ogrenci.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-ogrenci',
    templateUrl: './oku-ogrenci.component.html'
})
export class OkuOgrenciComponent implements OnInit, OnDestroy {
okuOgrencis: OkuOgrenci[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuOgrenciService: OkuOgrenciService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuOgrenciService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuOgrencis = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuOgrencis();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuOgrenci) {
        return item.id;
    }
    registerChangeInOkuOgrencis() {
        this.eventSubscriber = this.eventManager.subscribe('okuOgrenciListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
