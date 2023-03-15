import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productEdit: Product;
  id: number;
  categoryList: Category[];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCategory();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.productService.findById(this.id).subscribe(product => {
      this.productEdit = product;
      this.productForm = new FormGroup({
        id: new FormControl(this.productEdit.id),
        name: new FormControl(this.productEdit.name),
        price: new FormControl(this.productEdit.price),
        description: new FormControl(this.productEdit.description),
        category: new FormControl(this.productEdit.category.name)
      });
    });
  }

  getAllCategory() {
    this.categoryService.getAll().subscribe(category => {
      this.categoryList = category;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.id, this.productEdit).subscribe(() => {
      alert('edit success');
      this.router.navigateByUrl('/product');
    });
  }
}
