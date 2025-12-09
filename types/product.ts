export interface Category {
  data: CategoryItem[];
}

export interface CategoryItem {
  id: number;
  name: string;
}

export interface ProductItems {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  }
}
export interface Product {
  data:ProductItems[]
}

export interface IconProps {
  className?: string;
}
