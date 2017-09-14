import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuYolcuComponent } from './oku-yolcu.component';
import { OkuYolcuDetailComponent } from './oku-yolcu-detail.component';
import { OkuYolcuPopupComponent } from './oku-yolcu-dialog.component';
import { OkuYolcuDeletePopupComponent } from './oku-yolcu-delete-dialog.component';

export const okuYolcuRoute: Routes = [
    {
        path: 'oku-yolcu',
        component: OkuYolcuComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuYolcu.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-yolcu/:id',
        component: OkuYolcuDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuYolcu.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuYolcuPopupRoute: Routes = [
    {
        path: 'oku-yolcu-new',
        component: OkuYolcuPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuYolcu.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-yolcu/:id/edit',
        component: OkuYolcuPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuYolcu.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-yolcu/:id/delete',
        component: OkuYolcuDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuYolcu.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
