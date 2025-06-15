import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader";
import {
  useGetProductsQuery,
  useCreateProductMutation,
  useDeleteProductMutation,
} from "../../slices/productsApiSlice";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Paginate from "../../components/Paginate";
const ProductListScreen = () => {
  const { pageNumber } = useParams();
  const { data, isLoading, error, refetch } = useGetProductsQuery({
    pageNumber,
  });
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();
  const [deleteProduct, { isLoading: loadingDelete }] =
    useDeleteProductMutation();
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteProduct(id);
        toast.success("Product deleted");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    } else {
    }
  };
  const createProductHandler = async () => {
    if (window.confirm("Are you sure you want to create new product?")) {
      try {
        await createProduct({});

        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <div className="w-[90%] mx-auto my-8">
      <Paginate page={data.page} pages={data.pages} isAdmin={true} />

      <Row className="mb-[3rem] items-center  flex border-1 border-[#50231433] p-2 rounded-md bg-[#5023141c]">
        <Col>
          <h1 className=" pt-2">Products</h1>
        </Col>
        <Col className="text-end">
          <Button
            className=" !py-[0.8rem] !bg-[#d93514] hover:!bg-[#c93510] transition-all duration-200 !border-none !text-[1.8rem] !rounded-lg"
            onClick={createProductHandler}
          >
            <span className="flex items-center gap-2 text-[1.2rem]">
              <FaEdit /> <span> Create Product</span>
            </span>
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <div className="overflow-x-auto w-full">
            <table className="min-w-[800px] w-full ">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>PRICE</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td className="hover:bg-[#5f2e122b] w-[5rem]">
                      <Link to={`/admin/product/${product._id}/edit`}>
                        <Button className="!bg-transparent !border-none !text-[#502314] duration-200 transition-all !font-bold !text-[1.2rem]">
                          <FaEdit />
                        </Button>
                      </Link>
                    </td>
                    <td className="hover:bg-[#5f2e122b] w-[5rem]">
                      <Button
                        className="!bg-transparent !border-none !text-[#502314] duration-200 transition-all !font-bold !text-[1.2rem]"
                        onClick={() => deleteHandler(product._id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductListScreen;
