import { NextPage } from "next";
import { Input } from "../../components/input";

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="label font-bold text-lg "> Create new Tracker device</h1>
      <div className="divider"></div>
      <form
        onSubmit={(evt) => {}}
        action="/api/tracker"
        method="POST"
        className="max-w-md w-full"
      >
        <Input label="Name" className="mb-2" placeholder="Name" />
        <Input label="IMEI" placeholder="IMEI" />
        <br />
        <input className="btn w-full" type="submit" />
      </form>
    </div>
  );
};

export default Home;
