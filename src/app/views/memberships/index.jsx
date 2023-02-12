import React, { Component } from "react";
import { Row, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { SimpleCard } from "@gull";
import axios from "axios";

import CustomModal from "../shared/CustomModal";
import AddMembership from "./add";

class MembershipList extends Component {
  state = {
    userList: [],
    showAddModal: false,
  };

  defaultSorted = [
    {
      dataField: "name",
      order: "asc"
    }
  ];

  componentDidMount() {
    axios.get("/api/user/all").then(({ data }) => {
      let userList = data.map(
        ({ id, name, email, age, company, balance }, ind) => ({
          id,
          name,
          email,
          age,
          balance,
          company,
          index: ind + 1
        })
      );
      this.setState({ userList });
    });
  };

  toggleModal = (show) => {
    this.setState({ showAddModal: show });
  }

  columns = [
    {
      dataField: "index",
      text: "No"
    },
    {
      dataField: "name",
      text: "User Name"
    },
    {
      dataField: "email",
      text: "User Email"
    },
    {
      dataField: "company",
      text: "Company"
    },
    {
      dataField: "balance",
      text: "Balance",
      align: "center",
      headerAlign: "center"
    },
    {
      dataField: "age",
      text: "Age",
      align: "center",
      headerAlign: "center"
    }
  ];

  sortableColumn = [
    {
      dataField: "index",
      text: "No",
      sort: true
    },
    {
      dataField: "name",
      text: "User Name",
      sort: true
    },
    {
      dataField: "email",
      text: "User Email",
      sort: true
    },
    {
      dataField: "company",
      text: "Company",
      sort: true
    },
    {
      dataField: "balance",
      text: "Balance",
      sort: true,
      align: "center",
      headerAlign: "center"
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      align: "center",
      headerAlign: "center"
    }
  ];

  paginationOptions = {
    // custom: true,
    paginationSize: 5,
    pageStartIndex: 1,
    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    totalSize: this.state.userList.length
  };

  render() {
    let { userList } = this.state;

    return (
      <div>
        <Row>
          <h1>Memberships</h1>
          <div className="separator-breadcrumb border-top"></div>
        </Row>

        <SimpleCard>
          <Button
            key="new-membership"
            variant="primary"
            className="btn-rounded m-1 text-capitalize float-end"
            onClick={() => { this.setState({ showAddModal: true })}}
            >
            <i className="nav-icon i-Add"></i> New
          </Button>
          <BootstrapTable
            bootstrap4
            className="table-responsive table-hover"
            keyField="id"
            data={userList}
            columns={this.sortableColumn}
            pagination={paginationFactory(this.paginationOptions)}
            noDataIndication={"Table is empty"}
          />
        </SimpleCard>
        <CustomModal
          size="xl"
          showModal={this.state.showAddModal}
          setShowModal={this.toggleModal}
          title="New Membership"
          >
            <AddMembership></AddMembership>
        </CustomModal>
      </div>
    );
  }
}

export default MembershipList;
