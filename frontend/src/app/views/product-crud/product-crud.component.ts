import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '@app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})

export class ProductCrudComponent {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {

  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
