import axios from "axios";

export default function Page() {
  const login = () =>
    axios.post("/api/auth", {
      username: "admin",
      password: "admin",
      type: "login",
    });
  return (
    <>
      <div className="navbar bg-base-100">
        <button onClick={login} className="btn">
          login
        </button>
      </div>
    </>
  );
}
