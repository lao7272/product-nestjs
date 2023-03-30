import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Product, ProductDocument } from './product.schema';
import { Model } from 'mongoose';
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>
  ){}
  create(createProductDto: CreateProductDto) {
    const date: number = Date.now();
    return this.ProductModel.create({...createProductDto, timestamp: date});
  }

  findAll() {
    return this.ProductModel.find({});
  }

  findOne(id: string) {
    return this.ProductModel.find({_id: id});
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: string) {
    return `This action removes a #${id} product`;
  }
}
