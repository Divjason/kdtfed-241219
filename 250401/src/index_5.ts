interface Post {
  id: number;
  title: string;
  content: string;
}

const fetchPost = (): Promise<Post> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시글제목",
        content: "게시글본문",
      });
    }, 3000);
  });
};
