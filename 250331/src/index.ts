// type Map2<T> = {
//   [key: string]: T;
// };

// let stringMap2: Map2<string> = {
//   key: "Hello",
// };

interface IKeyPair<K, V> {
  key: K;
  value: V;
}

// interface IKeyPair2 {
//   key: boolean;
//   value: string[];
// }

let keyPair: IKeyPair<string, number> = {
  key: "Key",
  value: 10,
};

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["i"],
};
