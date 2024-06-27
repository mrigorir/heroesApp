export interface Hero {
  users: User[];
  heroes: HeroElement[];
}

export interface HeroElement {
  id: string;
  superhero: string;
  publisher: Publisher;
  alter_ego: string;
  first_appearance: string;
  characters: string;
  alt_img: string;
}

export enum Publisher {
  DCComics = 'DC Comics',
  MarvelComics = 'Marvel Comics',
}

export interface User {
  id: number;
  usuario: string;
  email: string;
}
