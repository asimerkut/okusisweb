import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusiswebSharedModule } from '../../shared';
import {
    OkuYolcuService,
    OkuYolcuPopupService,
    OkuYolcuComponent,
    OkuYolcuDetailComponent,
    OkuYolcuDialogComponent,
    OkuYolcuPopupComponent,
    OkuYolcuDeletePopupComponent,
    OkuYolcuDeleteDialogComponent,
    okuYolcuRoute,
    okuYolcuPopupRoute,
} from './';

const ENTITY_STATES = [
    ...okuYolcuRoute,
    ...okuYolcuPopupRoute,
];

@NgModule({
    imports: [
        OkusiswebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuYolcuComponent,
        OkuYolcuDetailComponent,
        OkuYolcuDialogComponent,
        OkuYolcuDeleteDialogComponent,
        OkuYolcuPopupComponent,
        OkuYolcuDeletePopupComponent,
    ],
    entryComponents: [
        OkuYolcuComponent,
        OkuYolcuDialogComponent,
        OkuYolcuPopupComponent,
        OkuYolcuDeleteDialogComponent,
        OkuYolcuDeletePopupComponent,
    ],
    providers: [
        OkuYolcuService,
        OkuYolcuPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebOkuYolcuModule {}
