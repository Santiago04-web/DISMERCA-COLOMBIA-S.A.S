export type MotorcycleBrand = 'Victory' | 'Kymco' | 'Kawasaki' | 'Benelli' | 'Stärker';

export interface Motorcycle {
  id: string;
  brand: MotorcycleBrand;
  model: string;
  category: string; // e.g. "Sport", "Scooter", "Naked", "Eléctrica", "Aventura"
  image: string;
  description: string;
  specs?: {
    displacement?: string;
    power?: string;
    engine?: string;
    transmission?: string;
  };
  featured?: boolean;
}

export interface CompanyInfo {
  legalName: string;
  nit: string;
  address: string;
  city: string;
  phone: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  domain: string;
}
