import React from "react";

const InquiriesList = () => {
  const inquiries = [
    {
      id: 13,
      name: "test",
      parent: "demo",
      birthday: "03-01-2020",
      gender: "female",
      phone: "3442555335",
      address: "2020",
      dateAdded: "01-01-1970 00:00:00",
    },
    {
      id: 14,
      name: "Student1",
      parent: "Parent",
      birthday: "07-01-2015",
      gender: "male",
      phone: "11111",
      address: "abc road",
      dateAdded: "07-08-2022 06:24:17",
    },
    {
      id: 15,
      name: "Ali",
      parent: "Ahmed",
      birthday: "16-11-2022",
      gender: "male",
      phone: "03311234567",
      address: "Karachi",
      dateAdded: "16-11-2022 17:18:57",
    },
  ];

  return (
    <div className="p-4 max-w-full overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 space-y-2 sm:space-y-0">
        <h2 className="text-xl font-bold text-blue-800">INQUIRIES LIST</h2>
        <div className="flex flex-wrap gap-2">
          <button className="bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 transition">
            Excel
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded text-sm hover:bg-blue-800 transition">
            + Add New Category
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded sm:w-1/3"
        />
      </div>

      {/* Table Section */}
      <div className="rounded shadow overflow-x-auto">
        <table className="min-w-[600px] table-auto">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Name",
                "Parent",
                "Birthday",
                "Gender",
                "Phone",
                "Address",
                "Date Added",
                "Admit",
                "Send SMS",
                "Action",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inquiries.map((inquiry, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2 text-sm">{inquiry.id}</td>
                <td className="px-4 py-2 text-sm">{inquiry.name}</td>
                <td className="px-4 py-2 text-sm">{inquiry.parent}</td>
                <td className="px-4 py-2 text-sm">{inquiry.birthday}</td>
                <td className="px-4 py-2 text-sm">{inquiry.gender}</td>
                <td className="px-4 py-2 text-sm">{inquiry.phone}</td>
                <td className="px-4 py-2 text-sm">{inquiry.address}</td>
                <td className="px-4 py-2 text-sm">{inquiry.dateAdded}</td>
                <td className="px-4 py-2">
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-yellow-600 transition">
                    Admit
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-orange-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-orange-600 transition">
                    Send SMS
                  </button>
                </td>
                <td className="px-4 py-2">
                  <button className="bg-gray-300 text-black px-2 py-1 rounded text-xs sm:text-sm hover:bg-gray-400 transition">
                    Action
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-6 space-y-4 sm:space-y-0">
        <span className="text-sm sm:text-base">
          Running Session: 2022 - 2023
        </span>
        <div className="flex flex-wrap gap-1">
          <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm hover:bg-blue-700 transition">
            Website
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded text-sm hover:bg-blue-700 transition">
            Demo Admin
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded text-sm hover:bg-red-700 transition">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiriesList;
