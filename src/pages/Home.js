import React from "react";
import Nav from "../components/Nav";
import uploadbtn  from "../components/images/vectorUploadBtn.png";
function Home() {
  return (
    <>
      <div className="container-fluid  vh-100 ">
        <div className="row m-2 ">
          <div className="col-md-12 bg-white ">
            <div className="p-5 ">
              <div className="row mb-2">
                <div className="col-md-10">
                  {" "}
                  <h2 className="text-header">Add Vehicle on board</h2>
                </div>
                <div className="col-md-2">
                  {" "}
                  <button type="button" className="btn btn-success">
                    today
                  </button>
                </div>
              </div>
              <div className="projectcont">
                <p>Vehicle & Owner details</p>
              </div>

              <div className="row">
                <div className="col-md-5">
                  {" "}
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label "
                    >
                      Vehicle No
                    </label>
                    <select
                      className="form-select textw"
                      aria-label="Default select example"
                    >
                      <option selected>HR80C 2881</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      state
                    </label>
                    <select
                      className="form-select textw"
                      aria-label="Default select example"
                    >
                      <option selected>Haryana</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Vehicle Owner Name
                    </label>
                    <input
                      type="email"
                      className="form-control textw"
                      id="exampleFormControlInput1"
                      placeholder="Rajesh Kumar"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Current Address
                    </label>
                    <input
                      type="email"
                      className="form-control textw"
                      id="exampleFormControlInput1"
                      placeholder="Ho no 123 ,sector 12"
                    />
                  </div>
                </div>
                <div className="col-md-5">
                  {" "}
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Vehicle type
                    </label>
                    <select
                      className="form-select textw"
                      aria-label="Default select example"
                    >
                      <option selected>Tata-Ace</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      dist
                    </label>
                    <select
                      className="form-select textw"
                      aria-label="Default select example"
                    >
                      <option selected>Hisar</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Owner Mob.No
                    </label>
                    <input
                      type="email"
                      className="form-control textw"
                      id="exampleFormControlInput1"
                      placeholder="+19-9812860592"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-5">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                       Aadhar Photo front
                        </label>
                        <button type="button" className="btn btn-success">
                        <img src={uploadbtn}/> &nbsp;&nbsp; Upload
                        </button>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="mb-3">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                         Aadhar Photo back
                        </label>
                        <button type="button" className="btn btn-success">
                        <img src={uploadbtn}/> &nbsp;&nbsp; Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Upload RC Photo
                    </label>
                    <button type="button" className="btn btn-success">
                    <img src={uploadbtn}/> &nbsp;&nbsp; Upload
                    </button>
                  </div>{" "}
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Pincode
                    </label>
                    <select
                      className="form-select textw"
                      aria-label="Default select example"
                    >
                      <option selected>125112</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Owner Photo
                    </label>
                   
                    <button type="button" className="btn btn-success">
                    <img src={uploadbtn}/> &nbsp;&nbsp; Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
