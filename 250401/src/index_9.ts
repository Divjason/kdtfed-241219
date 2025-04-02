// type Exclude<T, U> = T extends U ? never : T;

// type A = Exclude<number | string | boolean, string>;

// infer : Inferred : 추론된
// 기본적으로 어떤 변수를 선언하고 해당 변수안에 값을 적용 => 타입을 추론!!
// infer 타입은 특정 함수에서 반환값의 타입을 추론!!!

type ReturnType<T> = T extends () => infer R ? R : never;

type FuncA = () => string;
type FuncB = () => number;

type A = ReturnType<FuncA>;
type B = ReturnType<FuncB>;
