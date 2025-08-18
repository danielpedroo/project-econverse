import type { Product } from "../model/types";

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("http://localhost:3001/products");

    if (!res.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const data: Product[] = await res.json();
    return data.slice(0, 4); 
    
  } catch (error) {
    console.error(error);
    return [];
  }
}
