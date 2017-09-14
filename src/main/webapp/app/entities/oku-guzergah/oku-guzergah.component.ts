import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiLanguageService, JhiAlertService } from 'ng-jhipster';

import { OkuGuzergah } from './oku-guzergah.model';
import { OkuGuzergahService } from './oku-guzergah.service';
import { ITEMS_PER_PAGE, Principal, ResponseWrapper } from '../../shared';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Component({
    selector: 'jhi-oku-guzergah',
    templateUrl: './oku-guzergah.component.html'
})
export class OkuGuzergahComponent implements OnInit, OnDestroy {
okuGuzergahs: OkuGuzergah[];
    currentAccount: any;
    eventSubscriber: Subscription;

    constructor(
        private okuGuzergahService: OkuGuzergahService,
        private alertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal
    ) {
    }

    loadAll() {
        this.okuGuzergahService.query().subscribe(
            (res: ResponseWrapper) => {
                this.okuGuzergahs = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInOkuGuzergahs();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: OkuGuzergah) {
        return item.id;
    }
    registerChangeInOkuGuzergahs() {
        this.eventSubscriber = this.eventManager.subscribe('okuGuzergahListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }
}
