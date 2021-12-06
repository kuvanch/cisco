import React,{useEffect} from "react";
import MaterialTable from 'material-table'
import {forwardRef} from "react"
import axios from "axios";
import Edit from "@material-ui/icons/Edit";
import Clear from "@material-ui/icons/Clear";
import Check from "@material-ui/icons/Check";
import AddBox from "@material-ui/icons/AddBox";
import Search from "@material-ui/icons/Search";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import LastPage from "@material-ui/icons/LastPage";
import FirstPage from "@material-ui/icons/FirstPage";
import FilterList from "@material-ui/icons/FilterList";
import ViewColumn from "@material-ui/icons/ViewColumn";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

const Index = () => {
  const token = localStorage.getItem("token");

  useEffect(()=>{
    if(!token){
      window.location.href="/admin"
    }
  },[token])

  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: "ID", field: "id",align:"center" },
    { title: "Ф.И.О", field: "full_name",align:"center" },
    {
      title: "Тел",
      field: "phone_number",
      align:"center",
      initialEditValue: "initial edit value",
    },
    { title: "Почта", align:"center", field: "email" },
    { title: "Компания", align:"center", field: "company_name" },
    { title: "Дата", align:"center", field: "createdDate", defaultSort:"desc" },

  ]);

  
  const [callback , setCallback] = useState(false);
  const [rowData , setRowData] = useState([]);
  const [countDay, setCountDay]= useState([]);
  const [loadings, setLoadings] = useState(true)  

    useEffect(() =>{
        const getData = async () => {
            const res = await axios.get("http://161.35.117.200:8087/api/admin/getAllCount", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
            });
            setCountDay(res.data)
        }
        getData();
      },[token,setCountDay]);

  useEffect(() =>{
    const getData = async () => {
        const res= await axios.get("http://161.35.117.200:8087/api/admin/getAllData", {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        }).then((res)=>{
          setRowData(res.data)
          setLoadings(false)
        }).catch(()=>{
          setLoadings(false)
          setColumns(true)
          setCallback("")
          console.log(res)
        })
    }
    getData();
  },[token, callback, setRowData]);

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
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <div>
      <MaterialTable
        isLoading={loadings}
        title={ "Контакты - " + countDay}
        columns={columns}
        data={rowData}
        icons={tableIcons}
      />
    </div>
  );
};

export default Index;
