import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [
    {
      productName: "Sabritas",
      price: 25,
      countSeal: 3,
      productId: uuid(),
      provider: uuid(),
    },
    {
      productName: "Bonafont",
      price: 19,
      countSeal: 0,
      productId: uuid(),
      provider: uuid()
    },
    {
      productName: "Skwinkles",
      price: 66,
      countSeal: 4,
      productId: uuid(),
      provider: uuid()
    }
  ]
  create(createProductDto: CreateProductDto) {
    if (!createProductDto.productId) createProductDto.productId = uuid()
    createProductDto.productId = uuid(),
    createProductDto.provider = uuid(),
    this.products.push(createProductDto);
    return this.products
  }

  findAll() {
    return this.products
  }

  findOne(id: string) {
    const product = this.products.filter((product) => product.productId === id)[0];
    if (!product) throw new NotFoundException();
    return product;
  }

  findByProvider(id: string) {
    const provider = this.products.filter((product) => product.provider === id)[0];
    if (!provider) throw new NotFoundException();
    return provider;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    let productToUpdate = this.findOne(id);
    productToUpdate = {
      ...productToUpdate,
      ...updateProductDto
    }
    this.products = this.products.map((product) => {
      if (product.productId === id){
        product = productToUpdate;
      }
      return product;
    })
    return productToUpdate;
  }

  remove(id: string) {
    this.products = this.products.filter((product) => product.productId != id);
    return this.products;
  }
}
