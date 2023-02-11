import { Component } from "@angular/core"

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
  styles: [],
})
export class ProductsHeaderComponent {
  sort: string = "desc"
  itemsShowCount: number = 12

  onSortUpdated(newSort: string) {
    this.sort = newSort
  }
}
