import React from "react";
import Nav from "../components/Nav";
import uploadbtn from "../components/images/vectorUploadBtn.png";
import vector from "../components/images/Vector (3).png";
import vector1 from "../components/images/Group 453.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row m-2 ">
          <div className="col-md-12 bg-white shadow-sm">
            <div className="p-5 ">
              <div className="row mb-2">
                <div className="col-md-10">
                  {" "}
                  <h2 className="text-header">Vehicle panding</h2>
                </div>
                <div className="col-md-2">
                  {" "}
                  <button type="button" className="btn btn-success">
                    today &nbsp;&nbsp;
                    <img src={vector} />
                  </button>
                </div>
              </div>
              <table class="table table-striped">
                <thead>
                  <tr className="">
                    <th scope="col">No.</th>
                    <th scope="col">Vehicle No</th>
                    <th scope="col">Owner Name</th>
                    <th scope="col">Mobile No</th>
                    <th scope="col">District</th>
                    <th scope="col">Vehicle type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>DIR 4455</td>
                    <td>Sandeep</td>
                    <td>+91-9812860592</td>
                    <td>Gurgaon</td>
                    <td>Tata Ace</td>
                    <td>panding</td>
                    <td>12-03-23,23.00hrs</td>
                    <td className="d-flex">
                      {" "}
                      <button type="button" className=" btn btn-primary btn1">
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                      </button>
                      &nbsp;
                      <button type="button" className=" btn btn-primary btn2">
                        <img src={vector1} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>RJ D 5344</td>
                    <td>Ajay</td>
                    <td>+91-9812860592</td>
                    <td>Gurgaon</td>
                    <td>Bike</td>
                    <td>panding</td>
                    <td>12-03-23,23.00hrs</td>
                    <td className="d-flex">
                      {" "}
                      <button type="button" className=" btn btn-primary btn1">
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className=" btn btn-primary btn2"
                      >
                         <img src={vector1} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>MP 02 3344</td>
                    <td>Raj Singh</td>
                    <td>+91-9812860592</td>
                    <td>Gurgaon</td>
                    <td>Pik up</td>
                    <td>panding</td>
                    <td>12-03-23,23.00hrs</td>
                    <td className="d-flex">
                      {" "}
                      <button type="button" className=" btn btn-primary btn1">
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className=" btn btn-primary btn2"
                      >
                         <img src={vector1} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>HR 80 C2881</td>
                    <td>Kuldeep</td>
                    <td>+91-9812860592</td>
                    <td>Gurgaon</td>
                    <td>Tata</td>
                    <td>panding</td>
                    <td>12-03-23,23.00hrs</td>
                    <td className="d-flex">
                      {" "}
                      <button type="button" className=" btn btn-primary btn1">
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className=" btn btn-primary btn2"
                      >
                         <img src={vector1} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1</th>
                    <td>DL 2C 2121</td>
                    <td>Sonu</td>
                    <td>+91-9812860592</td>
                    <td>Gurgaon</td>
                    <td>omni</td>
                    <td>panding</td>
                    <td>12-03-23,23.00hrs</td>
                    <td className="d-flex">
                      {" "}
                      <button type="button" className=" btn btn-primary btn1">
                        <FontAwesomeIcon icon={faEdit} /> &nbsp; Edit
                      </button>
                      &nbsp;
                      <button
                        type="button"
                        className=" btn btn-primary btn2"
                      >
                         <img src={vector1} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
