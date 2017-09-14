import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuAracComponent } from './oku-arac.component';
import { OkuAracDetailComponent } from './oku-arac-detail.component';
import { OkuAracPopupComponent } from './oku-arac-dialog.component';
import { OkuAracDeletePopupComponent } from './oku-arac-delete-dialog.component';

export const okuAracRoute: Routes = [
    {
        path: 'oku-arac',
        component: OkuAracComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuArac.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-arac/:id',
        component: OkuAracDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuArac.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuAracPopupRoute: Routes = [
    {
        path: 'oku-arac-new',
        component: OkuAracPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuArac.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-arac/:id/edit',
        component: OkuAracPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuArac.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-arac/:id/delete',
        component: OkuAracDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuArac.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
