import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { OkuGuzergahComponent } from './oku-guzergah.component';
import { OkuGuzergahDetailComponent } from './oku-guzergah-detail.component';
import { OkuGuzergahPopupComponent } from './oku-guzergah-dialog.component';
import { OkuGuzergahDeletePopupComponent } from './oku-guzergah-delete-dialog.component';

export const okuGuzergahRoute: Routes = [
    {
        path: 'oku-guzergah',
        component: OkuGuzergahComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuGuzergah.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'oku-guzergah/:id',
        component: OkuGuzergahDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuGuzergah.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const okuGuzergahPopupRoute: Routes = [
    {
        path: 'oku-guzergah-new',
        component: OkuGuzergahPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuGuzergah.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-guzergah/:id/edit',
        component: OkuGuzergahPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuGuzergah.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'oku-guzergah/:id/delete',
        component: OkuGuzergahDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'okusiswebApp.okuGuzergah.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
