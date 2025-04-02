interface Post {
  title: string;
  tags: string[];
  contents: string;
  thumbnail?: string;
}

// const withThumbnailPost: Required<Post> = {
//   title: "밥은 먹고 다니냐",
//   tags: ["해장국"],
//   contents: "달래해장국",
//   // thumbnail: "https/www.naver.com",
// };

const withThumbnailPost: Readonly<Post> = {
  title: "밥은 먹고 다니냐",
  tags: ["해장국"],
  contents: "달래해장국",
  thumbnail: "https/www.naver.com",
};

// withThumbnailPost.contents = "맘스터치";

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };

// const draft: Partial<Post> = {
//   title: "밥먹자",
//   content: "제육볶음",
// };

// type Partial01<T> = {
//   [key in keyof T]?: T[key];
// };
