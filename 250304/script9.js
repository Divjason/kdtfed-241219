// fetch() => API
const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
        <h2>${student.major}</h2>
        <ul>
          <li>전공 : ${student.major}</li>
          <li>학년 : ${student.grade} </li>
        </ul>
      `;
    });
    result.innerHTML = output;
  })
  .catch((err) => console.error(err));
