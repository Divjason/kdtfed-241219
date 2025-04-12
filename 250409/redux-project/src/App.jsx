import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const inCrease = () => {
    dispatch({ type: "INCREMENT", payload: { num: 4 } });
  };

  const deCrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 4 } });
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "Park", password: "1234" } });
  };

  return (
    <div>
      <h1>
        {id}, {password}
      </h1>
      <h1>{count}</h1>
      <Box />
      <button onClick={inCrease}>증가</button>
      <button onClick={login}>로그인</button>
      <button onClick={deCrease}>감소</button>
    </div>
  );
}

export default App;
