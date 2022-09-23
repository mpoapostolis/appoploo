import clsx from "clsx";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../../components/input";
import { AdminLayout } from "../../components/layout/admin";
import useMutation from "../../hooks/useMutation";
import { createTracker, useTrackers } from "../../lib/tracker";
import { useUsers } from "../../lib/users";

const Home: NextPage = () => {
  const { data: trackers } = useTrackers();
  const { data: users } = useUsers();
  const [open, setOpen] = useState(false);
  const [mutate] = useMutation(createTracker, ["/api/tracker"]);
  const toggleModal = () => setOpen(!open);
  return (
    <AdminLayout>
      <div className="w-full flex justify-end">
        <button onClick={toggleModal} className="btn">
          New Device
        </button>
      </div>
      <br />
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>IMEI</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {trackers.map((tracker, idx) => (
              <tr key={tracker._id}>
                <th>{idx}</th>
                <td>{tracker.owner}</td>
                <td>{tracker.IMEI}</td>
                <td>
                  <img
                    role="button"
                    src="https://s2.svgbox.net/materialui.svg?ic=edit&color=999"
                    alt=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className={clsx("modal", {
          "modal-open": open,
        })}
      >
        <div className="modal-box">
          <h3 className="font-bold mb-4 text-lg ">
            Create a new tracker device for user!
          </h3>
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              const IMEI = evt.currentTarget.IMEI.value;
              const userId = evt.currentTarget.userId.value;
              console.log(evt.currentTarget.userId.value);
              mutate(userId, IMEI);
              toggleModal();
              evt.currentTarget.reset();
            }}
          >
            <select
              name="userId"
              id="userId"
              className="select w-full select-bordered"
            >
              <option disabled selected>
                Select user
              </option>
              {users.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.userName}
                </option>
              ))}
            </select>
            <br />
            <Input placeholder="IMEI" name="IMEI" id="IMEI" label=""></Input>
            <div className="modal-action w-full">
              <input type="submit" className="btn w-full" />
            </div>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Home;
