export interface Product {
    description: string;
    productId: number;
    nameProduct: string;
    price: number;
    image: string;
    auctionEndTime: Date | null;
  }
  
 export interface NFTCardProps {
  data: {
    id: number;
    nameUser: string;
    avartar: string;
    products:Product[];
  };
}