import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datatable-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class DatatableRowComponent {

  @Input() public row: Array<any> = [];
  @Input() public columns: Array<any> = [];

  public getData(row: any, propertyName: string): string {
    return propertyName.split('.').reduce((prev: any, curr: string) => prev[curr], row);
  }

  @Input()
  public set config(conf: any) {
    if (!conf.className) {
      conf.className = 'table-striped table-bordered';
    }
    if (conf.className instanceof Array) {
      conf.className = conf.className.join(' ');
    }
  }

  @Output() public cellClicked: EventEmitter<any> = new EventEmitter();

  public onCellClick(column, row) {
    console.log(column, row);
  }
}
