export interface Category {
  id: string;
  name: string;
  image: string;
  color: string;
}

export interface NavItem {
  id: string;
  icon: string;
  label: string;
  isActive?: boolean;
  isCart?: boolean;
  count?: number;
}