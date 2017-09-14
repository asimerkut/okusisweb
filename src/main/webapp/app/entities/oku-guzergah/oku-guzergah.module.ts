import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OkusiswebSharedModule } from '../../shared';
import {
    OkuGuzergahService,
    OkuGuzergahPopupService,
    OkuGuzergahComponent,
    OkuGuzergahDetailComponent,
    OkuGuzergahDialogComponent,
    OkuGuzergahPopupComponent,
    OkuGuzergahDeletePopupComponent,
    OkuGuzergahDeleteDialogComponent,
    okuGuzergahRoute,
    okuGuzergahPopupRoute,
} from './';

const ENTITY_STATES = [
    ...okuGuzergahRoute,
    ...okuGuzergahPopupRoute,
];

@NgModule({
    imports: [
        OkusiswebSharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        OkuGuzergahComponent,
        OkuGuzergahDetailComponent,
        OkuGuzergahDialogComponent,
        OkuGuzergahDeleteDialogComponent,
        OkuGuzergahPopupComponent,
        OkuGuzergahDeletePopupComponent,
    ],
    entryComponents: [
        OkuGuzergahComponent,
        OkuGuzergahDialogComponent,
        OkuGuzergahPopupComponent,
        OkuGuzergahDeleteDialogComponent,
        OkuGuzergahDeletePopupComponent,
    ],
    providers: [
        OkuGuzergahService,
        OkuGuzergahPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebOkuGuzergahModule {}
