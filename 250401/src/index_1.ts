type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

interface Map<V> {
  [key: string]: V;
}

let stringMap3: Map<string> = {
  key: "value",
};

let booleanMap3: Map<boolean> = {
  key: true,
};

interface IKeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: IKeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: IKeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};
