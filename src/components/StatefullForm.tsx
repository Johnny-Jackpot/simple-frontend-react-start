import React, { useReducer } from "react";

type State = {
  username: string;
  email: string;
  error: boolean;
  loading: boolean;
};

const initialState: State = {
  username: "",
  email: "",
  error: false,
  loading: false,
};

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_ERROR"; payload: boolean }
  | { type: "SET_LOADING"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export const StatefullForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_USERNAME", payload: e.target.value });
    dispatch({ type: "SET_ERROR", payload: false });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
    dispatch({ type: "SET_ERROR", payload: false });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.username === "" || state.email === "") {
      dispatch({ type: "SET_ERROR", payload: true });
      return;
    }

    dispatch({ type: "SET_LOADING", payload: true });
    setTimeout(() => {
      dispatch({ type: "SET_LOADING", payload: false });
      dispatch({ type: "SET_USERNAME", payload: "" });
      dispatch({ type: "SET_EMAIL", payload: "" });
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="margin-top-10">
        <label htmlFor="username" className="margin-right-10">
          Username:
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={state.username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="margin-top-10">
        <label htmlFor="email" className="margin-right-10">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={handleEmailChange}
        />
      </div>
      {state.error && (
        <p style={{ color: "red" }}>Please fill in all the fields</p>
      )}
      <div className="margin-top-10">
        <button type="submit" className="button" disabled={state.loading}>
          {state.loading ? "Loading..." : "Submit"}
        </button>
      </div>
    </form>
  );
};
