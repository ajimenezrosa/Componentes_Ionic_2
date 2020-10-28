import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearcherPageRoutingModule } from './searcher-routing.module';

import { SearcherPage } from './searcher.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearcherPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SearcherPage]
})
export class SearcherPageModule {}
