import React from "react";
import { Button } from "react-bootstrap";
import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from "../../slices/usersApiSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteUser(id);
        toast.success("User deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="w-[90%] mx-auto my-8">
      <h1>Users</h1>
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {" "}
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-[800px] w-full text-sm ">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:{user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FaCheck
                        style={{ color: "green" }}
                        className="text-red-600 inline-block"
                      />
                    ) : (
                      <FaTimes
                        style={{ color: "red" }}
                        className="text-red-600 inline-block"
                      />
                    )}
                  </td>

                  <td className="hover:bg-[#5f2e122b] w-[8rem]">
                    <Link to={`/admin/user/${user._id}/edit`}>
                      <Button className="!bg-transparent !border-none !text-[#502314] duration-200 transition-all !font-bold !text-[1.2rem]">
                        <FaEdit />
                      </Button>
                    </Link>
                  </td>
                  <td>
                    {" "}
                    <Button
                      className="!bg-transparent !border-none !text-[#502314] duration-200 transition-all !font-bold !text-[1.2rem]"
                      onClick={() => {
                        deleteHandler(user._id);
                      }}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserListScreen;
