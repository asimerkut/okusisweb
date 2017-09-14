import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OkusiswebOkuSehirModule } from './oku-sehir/oku-sehir.module';
import { OkusiswebOkuOkulModule } from './oku-okul/oku-okul.module';
import { OkusiswebOkuOgrenciModule } from './oku-ogrenci/oku-ogrenci.module';
import { OkusiswebOkuYolcuModule } from './oku-yolcu/oku-yolcu.module';
import { OkusiswebOkuGuzergahModule } from './oku-guzergah/oku-guzergah.module';
import { OkusiswebOkuSoforModule } from './oku-sofor/oku-sofor.module';
import { OkusiswebOkuAracModule } from './oku-arac/oku-arac.module';
import { OkusiswebOkuSeferModule } from './oku-sefer/oku-sefer.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OkusiswebOkuSehirModule,
        OkusiswebOkuOkulModule,
        OkusiswebOkuOgrenciModule,
        OkusiswebOkuYolcuModule,
        OkusiswebOkuGuzergahModule,
        OkusiswebOkuSoforModule,
        OkusiswebOkuAracModule,
        OkusiswebOkuSeferModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusiswebEntityModule {}
