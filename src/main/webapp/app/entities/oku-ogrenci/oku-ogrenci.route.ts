import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuOgrenciComponent } from './oku-ogrenci.component';
import { OkuOgrenciDetailComponent } from './oku-ogrenci-detail.component';
import { OkuOgrenciPopupComponent } from './oku-ogrenci-dialog.component';
import { OkuOgrenciDeletePopupComponent } from './oku-ogrenci-delete-dialog.component';

export const okuOgrenciRoute: Routes = [
    {
        path: 'oku-ogrenci',
        component: OkuOgrenciComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOgrenci.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-ogrenci/:id',
        component: OkuOgrenciDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOgrenci.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuOgrenciPopupRoute: Routes = [
    {
        path: 'oku-ogrenci-new',
        component: OkuOgrenciPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOgrenci.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-ogrenci/:id/edit',
        component: OkuOgrenciPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOgrenci.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-ogrenci/:id/delete',
        component: OkuOgrenciDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuOgrenci.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
