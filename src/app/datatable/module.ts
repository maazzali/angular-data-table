import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DatatableComponent } from './datatable.component';
import { DatatableHeaderComponent } from './header/header.component';
import { DatatableBodyComponent } from './body/body.component';
import { DatatableRowComponent } from './body/row.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DatatableSortingDirective } from './datatable-sorting.directive';
import { DatatableFilteringDirective } from './datatable-filtering.directive';

const COMPONENTS = [
  DatatableComponent,
  DatatableHeaderComponent,
  DatatableBodyComponent,
  DatatableRowComponent,
  PaginationComponent,
  DatatableSortingDirective,
  DatatableFilteringDirective
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
  providers: [],
})
export class DatatableModule {}
