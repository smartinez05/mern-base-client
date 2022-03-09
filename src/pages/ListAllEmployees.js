import { React } from "react";
import Layout from "../components/Layout";

export default function ListAllEmployees() {
  return (
    <>
      {/* {employeeList.map((val, key) => {
        return (
          <div key={key}>
            <p>{val.nameEmployee}</p>
          </div>
        );
      })} */}
      <Layout>
        <h1>List</h1>
      </Layout>
    </>
  );
}
