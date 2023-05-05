import { useEffect, useState } from "react";
import "../CSS/tailwind/table.css";
import { Aside } from "../Menu/Aside";
import api from "../services/axios";
import {
  fetchListFailure,
  fetchListRequest,
  fetchListSuccess,
} from "../Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const Table = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  // const fetchData = async (page: number) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const data = useSelector((state: any) => state.user.data);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const loading = useSelector((state: any) => state.user.loading);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const error = useSelector((state: any) => state.user.error);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(fetchListRequest());

    // Simulated API call
    api
      .get(`/list-users?page=${currentPage}`)
      .then((response) => response.data)
      .then((response) => dispatch(fetchListSuccess(response.data)))
      .catch((error) => {
        const errorMessage = error.response.data.msg;
        dispatch(fetchListFailure(errorMessage));
        toast.error(errorMessage);
      });
  }, [currentPage, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="card-content">
      <Aside />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Avatar</th>

            {/* <th>Created</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((res) => (
            <tr key={res?._id}>
              <td data-label="Name">{res?.name}</td>
              <td data-label="Email">{res?.email}</td>
              <td data-label="Avatar">
                <img
                  src={res?.avatar}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>

              <td className="actions-cell">
                <div className="buttons right nowrap">
                  <button
                    className="button small green --jb-modal"
                    data-target="sample-modal-2"
                    type="button"
                    // onClick={() => {
                    //   viewEmployee(res?._id);
                    // }}
                  >
                    <span className="icon">
                      <i className="mdi mdi-eye"></i>
                    </span>
                  </button>
                  <button
                    className="button small red --jb-modal"
                    data-target="sample-modal"
                    type="button"
                    // onClick={() => {
                    //   deleteEmployee(res?._id);
                    // }}
                  >
                    <span className="icon">
                      <i className="mdi mdi-trash-can"></i>
                    </span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="table-pagination">
        <div className="flex items-center justify-between">
          <div className="buttons">
            <button
              type="button"
              className="button active"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              type="button"
              className="button"
              onClick={handleNextPage}
              disabled={currentPage > data.length}
            >
              Next
            </button>
          </div>
          <small>
            Page {currentPage} of {data.length - 1}
          </small>
        </div>
      </div>
    </div>
  );
};
