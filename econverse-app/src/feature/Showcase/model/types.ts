export type Product = {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
};

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
};

export type NavLinkProps = {
  isVisibleLinks: boolean
}


