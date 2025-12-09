"use server";

import { Product, Category } from "@/types/product";
import { api } from "@/utils/api";

export async function getAllProducts(): Promise<Product> {
  return api<Product>("/products");
}

export async function getCategories(): Promise<Category> {
  return api<Category>(`/products/categories`);
}

export async function getProductByCategory(
  category: string
): Promise<Product> {
  return api<Product>(`/products/category/${category}`);
}

export async function getSingleProduct(id: string): Promise<Product> {
  return api<Product>(`/${id}`);
}
