import React, { useEffect, useState } from "react";
import ModalActivity from "./ModalActivity";

const GuardActivityTable = ({ currentActivities, loading }) => {
  const [showModal, setShowModal] = useState(false);
  const [dataActivity, setDataActivity] = useState(null);

  useEffect(() => {
    dataActivity !== null ? setShowModal(true) : setShowModal(false);
  }, [dataActivity]);

  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-y-auto  border-b border-gray-200 sm:rounded-lg">
              <table className="w-full">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Kode Kegiatan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Nama Perusahaan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Nama Lengkap
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Uraian Kegiatan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-300">
                  {currentActivities.length < 0 ? (
                    <tr className="text-center">
                      <td colSpan="6" className="px-6 py-4 whitespace-nowrap">
                        Data not found
                      </td>
                    </tr>
                  ) : loading ? (
                    <tr className="text-center">
                      <td colSpan="6" className="px-6 py-4 whitespace-nowrap">
                        Loading . . .
                      </td>
                    </tr>
                  ) : (
                    currentActivities.map((activity) => (
                      <tr key={activity.satpamkegiatankode}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">
                            {activity.satpamkegiatankode}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            {activity.satpamperusahaannama}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            {activity.satpamnamalengkap}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm">
                            {activity.satpamkegiatanuraian}
                          </div>
                        </td>
                        <td className="flex justify-center py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-300 dark:bg-purple-600 text-purple-800 hover:bg-purple-800 hover:text-gray-50"
                            onClick={() => setDataActivity(activity)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <ModalActivity
          setShowModal={setShowModal}
          dataActivity={dataActivity}
          setDataActivity={setDataActivity}
        />
      ) : null}
    </>
  );
};

export default GuardActivityTable;
