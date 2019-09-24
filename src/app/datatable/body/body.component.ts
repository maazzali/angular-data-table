import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datatable-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class DatatableBodyComponent {

  public dataRows: Array<any> = [];
  @Input() public set rows(rows: Array<any>) {
    this.dataRows = rows;
  }
  @Input() public columns: Array<any> = [];

  @Output() public updateTable: EventEmitter<any> = new EventEmitter();

  @Input()
  public set config(conf: any) {
    if (!conf.className) {
      conf.className = 'table-striped table-bordered';
    }
    if (conf.className instanceof Array) {
      conf.className = conf.className.join(' ');
    }
  }

  public onTableChange(event) {
    this.updateTable.emit(event);
  }
}
