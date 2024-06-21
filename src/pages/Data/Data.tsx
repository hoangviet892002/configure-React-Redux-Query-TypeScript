import React from "react";
import { Link } from "react-router-dom";
import { useQueryStrings } from "../../utils/useQuery";
import { useQuery } from "@tanstack/react-query";
import { DataService } from "../../services";
import { getDatasApi } from "../../apis/data.api";
import { User } from "../../types/user.type";
import { data } from "../../types/data.type";

const Data = () => {
  const queryString = useQueryStrings();

  const page = queryString.page ? parseInt(queryString.page) : 1;
  const { data, isLoading } = useQuery({
    queryKey: ["data", { page }],
    queryFn: () => {
      return DataService().getDatas(page);
    },

    //   getDatasApi().then((res) => {
    //     return res;
    //   }),
  });

  return (
    <div>
      <h1 className="text-lg">Students</h1>
      {isLoading && (
        <div role="status" className="mt-6 animate-pulse">
          <div className="mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-10  rounded bg-gray-200 dark:bg-gray-700" />
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <div className="relative mt-6 overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                #
              </th>
              <th scope="col" className="py-3 px-6">
                Avatar
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Create At
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item: data, index: number) => (
              <tr
                key={index}
                className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
              >
                <td className="py-4 px-6">{item.id}</td>
                <td className="py-4 px-6">
                  <img
                    src={item.avatar.toString()}
                    alt="student"
                    className="h-5 w-5"
                  />
                </td>
                <th
                  scope="row"
                  className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">{item.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Data;
