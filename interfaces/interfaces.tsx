import React, { Dispatch } from 'react';

export interface IProduct {
  id: number
  name: string
  price: number
  image: string
  count: number
}

export interface IProductProps {
  product: IProduct
  checkProduct: (product: IProduct) => JSX.Element
  productCount: any
}

export interface IProductListProps {
  filterProduct: IProduct[]
  car: IProduct[]
  search: string
  setCar: Dispatch<IProduct[]>
}

export interface IShoppingResumeProps {
  car: IProduct[]
}

export interface IResumeProps {
  price: number
  shippingCost: number
  taxes: number
  total: number
}