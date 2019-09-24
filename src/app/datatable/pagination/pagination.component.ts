import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { get } from 'lodash';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() public totalItems = 0;
  @Input() public config: any = {};

  @Output() public tableChanged: EventEmitter<any> = new EventEmitter();

  public pageSizes = [];
  public selectedPageSize = 25;
  public pageNo = 1;
  public totalPages = 1;

  public ngOnInit() {
    this.pageSizes = get(this.config, 'paging.pageSizes', []);
    this.selectedPageSize = get(this.config, 'paging.defaultPageSize', 25);
    this.paginate();
  }

  public paginate(): void {
    this.totalPages = Math.ceil(this.totalItems / this.selectedPageSize);
    this.emitChanges();
  }

  public clickPagination(evt: Event, value: number): void {
    evt.preventDefault();
    this.pageNo = this.pageNo + value;
    this.emitChanges();
  }

  public pageSizeChanged(evt: Event) {
    this.selectedPageSize = Number(evt);
    this.totalPages = Math.ceil(this.totalItems / this.selectedPageSize);
    this.pageNo = 1;
    this.emitChanges();
  }

  public emitChanges(): void {
    this.tableChanged.emit({pageNo: this.pageNo, pageSize: this.selectedPageSize, totalPages: this.totalPages});
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.totalItems.currentValue !== changes.totalItems.previousValue) {
      this.paginate();
    }
  }
}
