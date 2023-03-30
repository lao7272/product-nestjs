import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product {
@Prop({required: true})
name: string;
@Prop({required: true})
price: number;
@Prop({required: true})
description: string;
@Prop({required: true})
thumbnail: string;
@Prop({required: true})
timestamp: number;
@Prop({required: true})
stock: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);