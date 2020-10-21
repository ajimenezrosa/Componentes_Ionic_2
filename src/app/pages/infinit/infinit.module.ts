import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinitPageRoutingModule } from './infinit-routing.module';

import { InfinitPage } from './infinit.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinitPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfinitPage]
})
export class InfinitPageModule {}
