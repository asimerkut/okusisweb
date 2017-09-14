import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusiswebSharedModule } from '../../shared';
import {
    OkuSehirService,
    OkuSehirPopupService,
    OkuSehirComponent,
    OkuSehirDetailComponent,
    OkuSehirDialogComponent,
    OkuSehirPopupComponent,
    OkuSehirDeletePopupComponent,
    OkuSehirDeleteDialogComponent,
    okuSehirRoute,
    okuSehirPopupRoute,
} from './';

const ENTITY_STATES = [
    ...okuSehirRoute,
    ...okuSehirPopupRoute,
];

@NgModule({
    imports: [
        OkusiswebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuSehirComponent,
        OkuSehirDetailComponent,
        OkuSehirDialogComponent,
        OkuSehirDeleteDialogComponent,
        OkuSehirPopupComponent,
        OkuSehirDeletePopupComponent,
    ],
    entryComponents: [
        OkuSehirComponent,
        OkuSehirDialogComponent,
        OkuSehirPopupComponent,
        OkuSehirDeleteDialogComponent,
        OkuSehirDeletePopupComponent,
    ],
    providers: [
        OkuSehirService,
        OkuSehirPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebOkuSehirModule {}
