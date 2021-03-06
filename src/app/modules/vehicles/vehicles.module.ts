import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesTableComponent } from './components/vehicles-table/vehicles-table.component';
import { AddEditVehicleComponent } from './components/add-edit-vehicle/add-edit-vehicle.component';

import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    VehiclesComponent,
    VehiclesTableComponent,
    AddEditVehicleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VehiclesRoutingModule,
    SharedModule,
    TextMaskModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
  providers: [MatDatepickerModule],
})
export class VehiclesModule {}
