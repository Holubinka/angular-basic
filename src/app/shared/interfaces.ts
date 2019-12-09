export interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

export interface Comments {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface Author {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;

}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
