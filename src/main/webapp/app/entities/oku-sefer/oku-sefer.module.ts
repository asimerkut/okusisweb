import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusiswebSharedModule } from '../../shared';
import {
    OkuSeferService,
    OkuSeferPopupService,
    OkuSeferComponent,
    OkuSeferDetailComponent,
    OkuSeferDialogComponent,
    OkuSeferPopupComponent,
    OkuSeferDeletePopupComponent,
    OkuSeferDeleteDialogComponent,
    okuSeferRoute,
    okuSeferPopupRoute,
} from './';

const ENTITY_STATES = [
    ...okuSeferRoute,
    ...okuSeferPopupRoute,
];

@NgModule({
    imports: [
        OkusiswebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuSeferComponent,
        OkuSeferDetailComponent,
        OkuSeferDialogComponent,
        OkuSeferDeleteDialogComponent,
        OkuSeferPopupComponent,
        OkuSeferDeletePopupComponent,
    ],
    entryComponents: [
        OkuSeferComponent,
        OkuSeferDialogComponent,
        OkuSeferPopupComponent,
        OkuSeferDeleteDialogComponent,
        OkuSeferDeletePopupComponent,
    ],
    providers: [
        OkuSeferService,
        OkuSeferPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebOkuSeferModule {}
