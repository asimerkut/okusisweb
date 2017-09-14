import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuSeferComponent } from './oku-sefer.component';
import { OkuSeferDetailComponent } from './oku-sefer-detail.component';
import { OkuSeferPopupComponent } from './oku-sefer-dialog.component';
import { OkuSeferDeletePopupComponent } from './oku-sefer-delete-dialog.component';

export const okuSeferRoute: Routes = [
    {
        path: 'oku-sefer',
        component: OkuSeferComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSefer.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-sefer/:id',
        component: OkuSeferDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSefer.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuSeferPopupRoute: Routes = [
    {
        path: 'oku-sefer-new',
        component: OkuSeferPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSefer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sefer/:id/edit',
        component: OkuSeferPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSefer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sefer/:id/delete',
        component: OkuSeferDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSefer.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
