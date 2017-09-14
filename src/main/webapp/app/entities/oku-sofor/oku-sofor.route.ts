import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuSoforComponent } from './oku-sofor.component';
import { OkuSoforDetailComponent } from './oku-sofor-detail.component';
import { OkuSoforPopupComponent } from './oku-sofor-dialog.component';
import { OkuSoforDeletePopupComponent } from './oku-sofor-delete-dialog.component';

export const okuSoforRoute: Routes = [
    {
        path: 'oku-sofor',
        component: OkuSoforComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSofor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-sofor/:id',
        component: OkuSoforDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSofor.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuSoforPopupRoute: Routes = [
    {
        path: 'oku-sofor-new',
        component: OkuSoforPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSofor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sofor/:id/edit',
        component: OkuSoforPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSofor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-sofor/:id/delete',
        component: OkuSoforDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuSofor.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
