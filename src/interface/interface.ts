export interface userProps {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  password: string;
  role: string;
  generateAuthToken: any;
}

export interface productProps {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  images: string;
}
