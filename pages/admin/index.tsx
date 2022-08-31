import { NextPage } from "next";
import Link from "next/link";
import { Input } from "../../components/input";
import { AdminLayout } from "../../components/layout/admin";

const Home: NextPage = () => {
  return (
    <AdminLayout>
      <div className="w-full flex justify-end">
        <label htmlFor="my-modal" className="btn">
          New Device
        </label>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Create a new tracker device for user!
          </h3>
          <form action="">
            <Input placeholder="IMEI" label=""></Input>
            <br />
            <select className="select w-full select-bordered">
              <option disabled selected>
                Select user
              </option>
            </select>
          </form>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn w-full">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
