import { useState } from "react";
import "./index.scss";
export default function SearchBox({ onSubmit = () => { }, label = "جستجو..." , className , color = "" }) {
  const [value, setValue] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };
  const clearValue = () => {
    setValue("");
    onSubmit("");
  };
  return (
    <form
      onSubmit={submit}
      className={`SearchBox d-flex flex-center w-100 ${className} `}
    > <button type="submit">
        <i className={`fs-5 bi bi-search ${color}`} />
      </button>
      {" "}
      <input
        type="text"
        value={value ?? ""}
        className={`px-3 ${color}`}
        onChange={({ target }) => {
          setValue(target.value);
        }}
        placeholder={label}
      />

      {!!value && (
        <button
          type="button"
          onClick={clearValue}
          className="bi bi-x-lg text-danger fs-5"
        />
      )}
    </form>
  );
}
