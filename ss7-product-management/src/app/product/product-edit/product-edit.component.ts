import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;

  productEdit: Product;

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = +paramMap.get('id');
      this.productEdit = this.productService.findById(key);
      this.productForm = new FormGroup({
        id: new FormControl(this.productEdit.id),
        name: new FormControl(this.productEdit.name),
        price: new FormControl(this.productEdit.price),
        description: new FormControl(this.productEdit.description)
      });
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.productForm.value);
    this.router.navigateByUrl('/product');
  }
}
