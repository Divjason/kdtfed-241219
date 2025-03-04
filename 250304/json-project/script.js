const url = "https://jsonplaceholder.typicode.com/users";

const display = (users) => {
  const result = document.querySelector("#result");
  console.log(users);
  let string = "";
  users.forEach((user) => {
    string += `
      <table>
        <tr>
          <th>이름</th>
          <td>${user.name}</td>
        </tr>
        <tr>
          <th>아이디</th>
          <td>${user.username}</td>
        </tr>
        <tr>
          <th>이메일</th>
          <td>${user.email}</td>
        </tr>
      </table>
    `;
  });
  result.innerHTML = string;
};

const init = async () => {
  const response = await fetch(url);
  const users = await response.json();
  display(users);
};

init();
