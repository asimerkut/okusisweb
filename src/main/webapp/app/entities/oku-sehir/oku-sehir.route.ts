import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuSehirComponent } from './oku-sehir.component';
import { OkuSehirDetailComponent } from './oku-sehir-detail.component';
import { OkuSehirPopupComponent } from './oku-sehir-dialog.component';
import { OkuSehirDeletePopupComponent } from './oku-sehir-delete-dialog.component';

export const okuSehirRoute: Routes = [
    {
        path: 'oku-sehir',
        component: OkuSehirComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSehir.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-sehir/:id',
        component: OkuSehirDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSehir.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuSehirPopupRoute: Routes = [
    {
        path: 'oku-sehir-new',
        component: OkuSehirPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSehir.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sehir/:id/edit',
        component: OkuSehirPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSehir.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sehir/:id/delete',
        component: OkuSehirDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSehir.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
