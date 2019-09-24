import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datatable-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DatatableHeaderComponent {

  @Input() public columns: Array<any> = [];

  @Input() public config: any = {};


  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  public isColumnSortedAscending(column) {
    return this.config && column.sort && column.sort === 'asc';
  }

  public isColumnSortedDescending(column) {
    return this.config && column.sort && column.sort === 'desc';
  }

  public getSortColumnOnly(column: any) {
    const sortColumns: Array<any> = [];

    this.columns.forEach((col: any) => {
      if (col.name !== column.name && col.sort !== false) {
        col.sort = '';
      }
      if (column.sort) {
        sortColumns.push(column);
      }
    });
    this.tableChanged.emit({sorting: {columns: sortColumns}}) ;
  }

}
