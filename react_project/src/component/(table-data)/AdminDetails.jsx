import React from "react";
import Header from "../../shared/header/Header";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAdminApi, getAdminApi } from "../../api";

function AdminDetails() {
  const { data, refetch } = useQuery(["getData"], getAdminApi);
  const { mutate: deleteMutation } = useMutation(deleteAdminApi, {
    onSuccess: () => {
      console.log("delete");
      refetch();
    },
    onError: (err) => {
      console.log(err);
    },
  });
  function handleDelete(id) {
    deleteMutation(id);
  }

  return (
    <div>
      <Header />
      <div className="container my-5">
        <h1 className="heading mb-5">Admin Details</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Pincode</th>
              <th>State</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Age</th>
              <th>Year</th>
              <th>Hobby</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((value) => {
                return (
                  <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.email}</td>
                    <td>{value.phone}</td>
                    <td>{value.address}</td>
                    <td>{value.pincode}</td>
                    <td>{value.state}</td>
                    <td>{value.country}</td>
                    <td>{value.gender}</td>
                    <td>{value.age}</td>
                    <td>{value.year}</td>
                    <td>{value.hobby}</td>

                    <td>
                      <button
                        className="btn-primary"
                        onClick={() => handleDelete(value.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDetails;
