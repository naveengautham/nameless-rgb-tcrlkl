import { useReducer } from "react";

export default function FormReducer() {
  const InitialForm = {
    userName: "",
    password: "",
  };
  function handleUsername(e) {
    dispatch({
      type: "textInput",
      payload: {
        key: e.target.name,
        input: e.target.value,
      },
    });
  }
  function handlePassword(e) {
    dispatch({
      type: "textInput",
      payload: {
        key: e.target.name,
        input: e.target.value,
      },
    });
  }
  function formReducer(form, action) {
    switch (action.type) {
      case "textInput": {
        return { ...form, [action.payload.key]: action.payload.input };
      }
      default: {
        throw Error("unknoe action:" + action.type);
      }
    }
  }

  const [form, dispatch] = useReducer(formReducer, InitialForm);
  console.log(form);
  return (
    <>
      <p>Form creation with useReducer concept</p>
      <form>
        <div>
          <label>
            UserName:
            <input
              type="text"
              name="userName"
              value={form.userName}
              onChange={handleUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handlePassword}
            />{" "}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
