import axios from "axios";
import React, { useEffect, useState } from "react";

const ProfilePage = ({ dataUser }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "GET",
        url: "https://dev-be.trijagabaya.co.id/api/auth/user-profile",
        headers: { Authorization: `Bearer ${dataUser.access_token}` },
      }).then((res) => {
        setUser(res.data.data[0]);
      });
    };

    fetchData();
  }, []);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Profile Page
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div className="px-4 py-3 mb-8 shadow-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Data Petugas
            </h3>
            <div className="block">
              <label className="text-sm mb-2">Foto Petugas</label>
              <div className="w-6/12 sm:w-4/12 px-4">
                <img
                  src={user.adminpetugasfoto}
                  alt=""
                  className="shadow rounded-full max-w-full h-auto align-middle border border-gray-700"
                />
              </div>
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 dark:text-gray-400">
                Kode Petugas
              </span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                disabled
                defaultValue={user.adminpetugaskode}
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 dark:text-gray-400">Username</span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                disabled
                defaultValue={user.adminpetugasusername}
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 dark:text-gray-400">
                Nama Lengkap
              </span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                disabled
                defaultValue={user.adminpetugasnamalengkap}
              />
            </label>
          </div>
          <div className="px-4 py-3 mb-8 shadow-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
              Data Perusahaan
            </h3>
            <div className="mt-4 md:mt-0 block">
              <label className="text-sm mb-2">Foto Perusahaan</label>
              <div className="w-6/12 sm:w-4/12 px-4">
                <img
                  src={user.adminpetugasperusahaanfoto}
                  alt=""
                  className="shadow rounded-md max-w-full h-auto align-middle border border-gray-700"
                />
              </div>
            </div>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 dark:text-gray-400">
                Nama Perusahaan
              </span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                disabled
                defaultValue={user.adminpetugasperusahaannama}
              />
            </label>
            <label className="mt-4 block text-sm">
              <span className="text-gray-700 dark:text-gray-400">
                Kode Perusahaan
              </span>
              <input
                className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
                disabled
                defaultValue={user.adminpetugasperusahaankode}
              />
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
