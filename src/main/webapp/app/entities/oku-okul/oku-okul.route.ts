import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuOkulComponent } from './oku-okul.component';
import { OkuOkulDetailComponent } from './oku-okul-detail.component';
import { OkuOkulPopupComponent } from './oku-okul-dialog.component';
import { OkuOkulDeletePopupComponent } from './oku-okul-delete-dialog.component';

export const okuOkulRoute: Routes = [
    {
        path: 'oku-okul',
        component: OkuOkulComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOkul.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-okul/:id',
        component: OkuOkulDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOkul.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuOkulPopupRoute: Routes = [
    {
        path: 'oku-okul-new',
        component: OkuOkulPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOkul.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-okul/:id/edit',
        component: OkuOkulPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOkul.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-okul/:id/delete',
        component: OkuOkulDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOkul.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
