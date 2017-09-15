import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusisSharedModule } from '../../shared';
import {
    OkuSoforService,
    OkuSoforPopupService,
    OkuSoforComponent,
    OkuSoforDetailComponent,
    OkuSoforDialogComponent,
    OkuSoforPopupComponent,
    OkuSoforDeletePopupComponent,
    OkuSoforDeleteDialogComponent,
    okuSoforRoute,
    okuSoforPopupRoute,
    OkuSoforResolvePagingParams,
} from './';

const ENTITY_STATES = [
    ...okuSoforRoute,
    ...okuSoforPopupRoute,
];

@NgModule({
    imports: [
        OkusisSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuSoforComponent,
        OkuSoforDetailComponent,
        OkuSoforDialogComponent,
        OkuSoforDeleteDialogComponent,
        OkuSoforPopupComponent,
        OkuSoforDeletePopupComponent,
    ],
    entryComponents: [
        OkuSoforComponent,
        OkuSoforDialogComponent,
        OkuSoforPopupComponent,
        OkuSoforDeleteDialogComponent,
        OkuSoforDeletePopupComponent,
    ],
    providers: [
        OkuSoforService,
        OkuSoforPopupService,
        OkuSoforResolvePagingParams,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusisOkuSoforModule {}
