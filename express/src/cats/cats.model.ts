export type CatType = {
  id: number;
  name: string;
  age: number;
  friends: string[];
};

export const Cat: CatType[] = [
  { id: 1, name: '또깡', age: 14, friends: ['모모'] },
  { id: 2, name: '제리', age: 2, friends: ['모모'] },
  { id: 3, name: '차차', age: 1, friends: ['모모'] },
  { id: 4, name: '모모', age: 8, friends: ['또깡'] },
];
