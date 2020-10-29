import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToastsPageRoutingModule } from './toasts-routing.module';

import { ToastsPage } from './toasts.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToastsPageRoutingModule , ComponentsModule
  ],
  declarations: [ToastsPage]
})
export class ToastsPageModule {}
