import React from "react";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import {
  AddBox,
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  LastPage,
  Remove,
  SaveAlt,
  Search,
  ViewColumn,
  FirstPage,
} from "@material-ui/icons";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Col } from "react-bootstrap";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

class BasicFiltering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableRef: React.createRef(),
    };
  }
  render() {
    const downloadPdf = () => {
      const doc = new jsPDF();
      doc.text("Información de la tabla", 20, 10);
      doc.autoTable({
        columns: this.props.columns.map((col) => ({
          ...col,
          dataKey: col.field,
        })),
        body: this.props.data,
      });
      doc.save("tabla.pdf");
    };

    return (
      <MaterialTable
        tableRef={this.state.tableRef}
        icons={tableIcons}
        title=""
        columns={this.props.columns}
        data={this.props.data}
        actions={[
          {
            icon: () => <ArrowDownward>Export</ArrowDownward>,
            tooltip: "Descargar pdf",
            onClick: () => downloadPdf(),
            isFreeAction: true,
          },
        ]}
        options={{
          filtering: this.props.filter,
          headerStyle: {
            backgroundColor: "#039be5",
            color: "#FFF",
            fontWeight: "bold",
            textAlign: "center",
          },
        }}
        onRowClick={(event, rowData) => {
          // Update the clicked rows checked state
          rowData.tableData.checked = !rowData.tableData.checked;

          // pass dataManager the current rows checked state and path/ID, the path/ID needs to be an array, ex: [1]
          this.state.tableRef.current.dataManager.changeRowSelected(
            rowData.tableData.checked,
            [rowData.tableData.id]
          );

          // call the onSelectionChange and pass it the row selected to ensure it updates your selection properly for any custom onSelectionChange functions.
          this.state.tableRef.current.onSelectionChange(rowData);

          if (rowData.tableData["checked"]) {
            this.props.test(rowData);
            // console.log(rowData);
          }
        }}
      />
    );
  }
}

export default BasicFiltering;
