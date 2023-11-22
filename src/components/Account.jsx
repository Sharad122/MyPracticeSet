"use client";
import Tablerow from "./Tablerow";
import { useAddUserMutation, useDeleteUserMutation, useGetUsersQuery } from "@/useApi/userApi";

const Account = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  const [addUser, addResponce] = useAddUserMutation();

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Server Error ...</p>;
  }
  return (
    <div className="flex flex-col items-center gap-6 my-3 py-12">
      <table className="max-w-5xl w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Options
            </th>
          </tr>
        </thead>
        {data &&
          data.map((userData, index) => {
            return <Tablerow key={index} user={userData} />;
          })}
      </table>
      <div className="flex gap-6 my-6">
        <button onClick={()=>addUser({id:10,name:'Sharad Parkhi',username:'Sh@rad',email:'sharad@gmail.com'})} className="px-6 py-1.5 bg-black text-white rounded-sm ">Add User</button>
      </div>
    </div>
  );
};

export default Account;
