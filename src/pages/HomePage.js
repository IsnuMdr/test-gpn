import axios from "axios";
import React, { useEffect, useState } from "react";
import GuardActivityTable from "../components/GuardActivityTable";
import { Pagination } from "../components/Pagination";
import { GoVerified, GoUnverified } from "react-icons/go";

const HomePage = ({ dataUser }) => {
  const [guardActivities, setGuardActivities] = useState([]);
  const [totalActivities, setTotalActivities] = useState(0);
  const [unVerified, setUnVerified] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activitiesPerPage] = useState(10); // custom data per page
  const [dateFilter, setDateFilter] = useState({
    startDate: "",
    endDate: "",
  });
  const [dataFiltered, setDataFiltered] = useState("");

  const { startDate, endDate } = dateFilter;

  const indexOfLastActivities = currentPage * activitiesPerPage;
  const indexOfFirstActivities = indexOfLastActivities - activitiesPerPage;
  let currentActivities = [];

  if (dataFiltered === "") {
    currentActivities = guardActivities.slice(
      indexOfFirstActivities,
      indexOfLastActivities
    );
  } else {
    currentActivities = dataFiltered.slice(
      indexOfFirstActivities,
      indexOfLastActivities
    );
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  useEffect(() => {
    const fetchData = async () => {
      await axios({
        method: "POST",
        url: "https://dev-be.trijagabaya.co.id/api/satpam-kegiatan/",
        headers: { Authorization: `Bearer ${dataUser.access_token}` },
      }).then((res) => {
        setGuardActivities(res.data.data);
        setTotalActivities(res.data.jumlah_data);
        setUnVerified(res.data.belum_verifikasi);
      });
    };

    fetchData();
  }, []);

  const handleFilterData = (e) => {
    e.preventDefault();

    const filteredData = guardActivities.filter((activity) => {
      return (
        startDate < activity.satpamkegiatantanggal &&
        activity.satpamkegiatantanggal < endDate
      );
    });
    setDataFiltered(filteredData);
  };

  const handleChangeFilter = (e) => {
    const { name, value } = e.target;
    setDateFilter((prev) => ({ ...prev, [name]: value }));
  };

  // useEffect(() => {
  //   console.log(guardActivities);
  // }, [guardActivities]);

  return (
    <main className="h-full overflow-y-auto">
      <div className="container px-6 mx-auto">
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Dashboard
        </h2>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
              <GoVerified />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Total Data
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {totalActivities}
              </p>
            </div>
          </div>
          {/* Card */}
          <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
              <GoUnverified />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Belum Verifikasi
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                {unVerified}
              </p>
            </div>
          </div>
        </div>
        <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
          Tabel Kegiatan Satpam
        </h2>
        <form onSubmit={handleFilterData}>
          <div className="flex items-center flex-col md:flex-row text-gray-700 dark:text-gray-800 gap-4">
            <div className="flex items-center justify-center">
              <div className="relative mb-3 md:w-auto">
                <label className="text-gray-700 dark:text-gray-200">
                  Start Date
                </label>
                <input
                  type="datetime-local"
                  className="block px-3 py-1.5 text-base font-normal rounded-sm bg-clip-padding border border-solid first-letter:rounded transition ease-in-out m-0  focus:border-purple-600 focus:outline-none bg-gray-300 border-gray-300 dark:bg-gray-600 dark:border-gray-600"
                  name="startDate"
                  value={startDate}
                  onChange={handleChangeFilter}
                />
              </div>
            </div>
            <div className="flex justify-items-center text-gray-700 dark:text-gray-200">
              To
            </div>
            <div className="flex items-center justify-center">
              <div className="relative mb-3 md:w-auto">
                <label className="text-gray-700 dark:text-gray-200">
                  End Date
                </label>
                <input
                  type="datetime-local"
                  className="block px-3 py-1.5 text-base font-normal rounded-sm bg-clip-padding border border-solid first-letter:rounded transition ease-in-out m-0  focus:border-purple-600 focus:outline-none bg-gray-300 border-gray-300 dark:bg-gray-600 dark:border-gray-600"
                  name="endDate"
                  value={endDate}
                  onChange={handleChangeFilter}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative mb-3 md:w-auto">
                <button
                  type="submit"
                  className="mt-6 px-3 py-1.5 text-base font-normal rounded-sm bg-clip-padding border border-solid first-letter:rounded m-0 focus:border-purple-600 text-gray-100 dark:text-gray-50 bg-purple-600 border-purple-600 dark:bg-purple-700 dark:border-purple-700 hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </form>

        <div className="px-4 py-3 mb-8 shadow-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
          <GuardActivityTable
            currentActivities={currentActivities}
            loading={loading}
          />

          <Pagination
            activitiesPerPage={activitiesPerPage}
            totalActivities={
              dataFiltered === "" ? guardActivities.length : dataFiltered.length
            }
            paginate={paginate}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
