interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL: string;
}

// const legacyPost: Pick<Post, "title" | "content"> = {
//   title: "힘내자",
//   content: "할 수 있잖아!!!",
// };

// type Pick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };

// Omit => 생략하다

const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "string",
};

type A = Exclude<string | boolean, string>;

type B = Extract<string | boolean, boolean>;
