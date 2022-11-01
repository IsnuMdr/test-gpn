import React from "react";

const ModalActivity = ({ setShowModal, dataActivity, setDataActivity }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-non">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 ">
                Rincian Data Kegiatan
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black dark:text-gray-50 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  setShowModal(false);
                  setDataActivity(null);
                }}
              >
                <span className="bg-transparent text-black dark:text-gray-50 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex flex-col overflow-y-auto h-96 text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800">
              <table>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 font-bold">
                      <div>Kode Kegiatan</div>
                    </td>
                    <td className="px-3">{dataActivity.satpamkegiatankode}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Nama Perusahaan</td>
                    <td className="px-3">
                      {dataActivity.satpamperusahaannama}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Kode Perusahaan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatansatpamperusahaankode}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Kode Kegiatan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatansatpamkode}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Nama Lengkap</td>
                    <td className="px-3">{dataActivity.satpamnamalengkap}</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Tanggal Kegiatan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatantanggal}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Uraian Kegiatan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanuraian}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Keterangan Kegiatan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketerangan}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Nama Perusahaan</td>
                    <td className="px-3">
                      {dataActivity.satpamperusahaannama}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Nama Perusahaan</td>
                    <td className="px-3">
                      {dataActivity.satpamperusahaannama}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Latitude</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanlatitude}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Longitude</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanlongitude}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Alamat Kegiatan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanalamat}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Patokan</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanalamatpatokan}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Foto 1</td>
                    <td className="px-3">
                      <img
                        className="w-full h-96 object-cover"
                        src={dataActivity.satpamkegiatanfotosatu}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Ket. Foto 1</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketeranganfotosatu}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Foto 2</td>
                    <td className="px-3">
                      <img
                        className="w-full h-96 object-cover"
                        src={dataActivity.satpamkegiatanfotodua}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Ket. Foto 2</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketeranganfotodua}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Foto 3</td>
                    <td className="px-3">
                      <img
                        className="w-full h-96 object-cover"
                        src={dataActivity.satpamkegiatanfototiga}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Ket. Foto 3</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketeranganfototiga}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Foto 4</td>
                    <td className="px-3">
                      <img
                        className="w-full h-96 object-cover"
                        src={dataActivity.satpamkegiatanfotoempat}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Ket. Foto 4</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketeranganfotoempat}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Foto 5</td>
                    <td className="px-3">
                      <img
                        className="w-full h-96 object-cover"
                        src={dataActivity.satpamkegiatanfotolima}
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-bold">Ket. Foto 5</td>
                    <td className="px-3">
                      {dataActivity.satpamkegiatanketeranganfotolima}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                onClick={() => {
                  setShowModal(false);
                  setDataActivity(null);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default ModalActivity;
