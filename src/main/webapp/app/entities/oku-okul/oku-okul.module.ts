import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusiswebSharedModule } from '../../shared';
import {
    OkuOkulService,
    OkuOkulPopupService,
    OkuOkulComponent,
    OkuOkulDetailComponent,
    OkuOkulDialogComponent,
    OkuOkulPopupComponent,
    OkuOkulDeletePopupComponent,
    OkuOkulDeleteDialogComponent,
    okuOkulRoute,
    okuOkulPopupRoute,
} from './';

const ENTITY_STATES = [
    ...okuOkulRoute,
    ...okuOkulPopupRoute,
];

@NgModule({
    imports: [
        OkusiswebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuOkulComponent,
        OkuOkulDetailComponent,
        OkuOkulDialogComponent,
        OkuOkulDeleteDialogComponent,
        OkuOkulPopupComponent,
        OkuOkulDeletePopupComponent,
    ],
    entryComponents: [
        OkuOkulComponent,
        OkuOkulDialogComponent,
        OkuOkulPopupComponent,
        OkuOkulDeleteDialogComponent,
        OkuOkulDeletePopupComponent,
    ],
    providers: [
        OkuOkulService,
        OkuOkulPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebOkuOkulModule {}
