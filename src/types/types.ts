export interface ServiceCardProps {
  service: Service;
  index: number;
  onClick: (service: Service) => void;
  onAdd: (service: Service, price: number, qty: number) => void;
}
export interface Service {
  id: string;
  title: string;
  rating?: number;
  price?: number;
  priceOptions?: PriceOption[];
  scope: string;
  reviews: unknown[];
  before: string;
  after: string;
}
export interface PriceOption {
  label: string;
  price: number;
  ratingCount?: number;
}

export interface BookingItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}
