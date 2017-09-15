import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusisSharedModule } from '../../shared';
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
    OkuOkulResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...okuOkulRoute,
    ...okuOkulPopupRoute,
];

@NgModule({
    imports: [
        OkusisSharedModule,
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
        OkuOkulResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusisOkuOkulModule {}
