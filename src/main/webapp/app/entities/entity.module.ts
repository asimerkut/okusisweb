import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { OkusisOkuSehirModule } from './oku-sehir/oku-sehir.module';
import { OkusisOkuOkulModule } from './oku-okul/oku-okul.module';
import { OkusisOkuOgrenciModule } from './oku-ogrenci/oku-ogrenci.module';
import { OkusisOkuYolcuModule } from './oku-yolcu/oku-yolcu.module';
import { OkusisOkuGuzergahModule } from './oku-guzergah/oku-guzergah.module';
import { OkusisOkuSoforModule } from './oku-sofor/oku-sofor.module';
import { OkusisOkuAracModule } from './oku-arac/oku-arac.module';
import { OkusisOkuSeferModule } from './oku-sefer/oku-sefer.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        OkusisOkuSehirModule,
        OkusisOkuOkulModule,
        OkusisOkuOgrenciModule,
        OkusisOkuYolcuModule,
        OkusisOkuGuzergahModule,
        OkusisOkuSoforModule,
        OkusisOkuAracModule,
        OkusisOkuSeferModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OkusisEntityModule {}
