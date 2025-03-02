import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}
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
  async create(createProductDto: CreateProductDto) {
  const product = this.productRepository.create(createProductDto)
  const savedProduct = this.productRepository.save(product);
  return savedProduct;
  }

  findAll() {
    return this.productRepository.find()
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
