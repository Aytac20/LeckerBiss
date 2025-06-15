import React from "react";
import { Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import { useGetOrdersQuery } from "../../slices/orderApiSlice";
import { Link } from "react-router-dom";

const OrderListScreen = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <div className="w-[90%] mx-auto my-8">
      <h1>Orders</h1>

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
                <th>User</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user?.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <FaTimes className="text-red-600 inline-block" />
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <FaTimes className="text-red-600 inline-block" />
                      )}
                    </td>
                    <td className="hover:bg-[#5f2e122b] w-[8rem]">
                      <Link to={`/order/${order._id}`}>
                        <Button className="!bg-transparent !border-none !text-[#502314] duration-200 transition-all !font-bold !text-[1.2rem]">
                          Details
                        </Button>
                      </Link>
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

export default OrderListScreen;
