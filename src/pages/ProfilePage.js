import React, { useState } from "react";

const ProfilePage = ({ dataUser }) => {
  const [data, setData] = useState(dataUser);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Profile Page
        </h2>
        <div className="px-4 py-3 mb-8 shadow-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Kode Petugas
            </span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugaskode}
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Nama Lengkap
            </span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugasnamalengkap}
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Nama Perusahaan
            </span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugasperusahaannama}
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Username</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugasusername}
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Kode Perusahaan
            </span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugasperusahaankode}
            />
          </label>
          <label className="mt-4 block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Status</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              disabled
              defaultValue={data.user.adminpetugasstatus}
            />
          </label>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
