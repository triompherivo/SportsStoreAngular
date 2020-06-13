import {Component} from "@angular/core";
import {ProductRepository} from "../model/product.repository";
import {Product} from "../model/product.model";


@Component({
  selector: "store",
  templateUrl:"store.component.html"
})
export class StoreComponent {
  public selectedCategory = null;
  constructor(private repository: ProductRepository) {}
  get Products() : Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get Categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(newCategory?:string){
    this.selectedCategory = newCategory;
  }
}
