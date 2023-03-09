import React from "react";
import {EmployeesList} from "../components/Employees/EmployeesList";
import {AddEmployee} from "../components/AddEmployee/AddEmployee";

export const EmployeesListView = () => (
    <>
        <AddEmployee/>
        <EmployeesList/>
    </>
);