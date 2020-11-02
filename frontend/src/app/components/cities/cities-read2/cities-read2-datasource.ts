import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Cities } from '../cities.model';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Cities[] = [
  {id: 1, city: 'Hydrogen'},
  {id: 2, city: 'Helium'},
  {id: 3, city: 'Lithium'},
  {id: 4, city: 'Beryllium'},
  {id: 5, city: 'Boron'},
  {id: 6, city: 'Carbon'},
  {id: 7, city: 'Nitrogen'},
  {id: 8, city: 'Oxygen'},
  {id: 9, city: 'Fluorine'},
  {id: 10, city: 'Neon'},
  {id: 11, city: 'Sodium'},
  {id: 12, city: 'Magnesium'},
  {id: 13, city: 'Aluminum'},
  {id: 14, city: 'Silicon'},
  {id: 15, city: 'Phosphorus'},
  {id: 16, city: 'Sulfur'},
  {id: 17, city: 'Chlorine'},
  {id: 18, city: 'Argon'},
  {id: 19, city: 'Potassium'},
  {id: 20, city: 'Calcium'},
];

/**
 * Data source for the CitiesRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CitiesRead2DataSource extends DataSource<Cities> {
  data: Cities[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Cities[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Cities[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Cities[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'city': return compare(a.city, b.city, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/city columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
