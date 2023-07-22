import  {useState} from 'react'
import Modal from "./Modal"
import { server_calls } from '../api/server'

import {DataGrid,GridColDef} from '@mui/x-data-grid'
import { useGetData } from '../custom-hooks/FetchData'

const columns: GridColDef[]=[
    { field: 'id', headerName: "ID", width: 90, hide:true},
    {field:'book_title', headerName: 'Book Title',flex:3},
    {field:'author', headerName: 'Author',flex:2},
    {field:'publisher', headerName: 'Publisher',flex:2},
    {field:'ISBN', headerName: 'ISBN',flex:2},
    {field:'language', headerName: 'Language',flex:1},
    {field:'book_length', headerName: 'Book Length',flex:1},
    {field:'cover_type', headerName: 'Cover Type',flex:1},
    {field:'rental_status', headerName: 'Rental Status',flex:1},
    {field:'renter', headerName: 'Renter',flex:2}
]

function DataTable() {
    let [open,setOpen]=useState(false)
    const {bookData,getData}=useGetData()
    const[selectionModel,setSelectionModel]=useState<string[]>([])

    const handleOpen=()=>{setOpen(true)}
    const handleClose=()=>{setOpen(false)}
    const deleteData = async () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout(()=>{window.location.reload()},500)
    // const getData = async () => {
    //     const result = await server_calls.get();
    //     console.log(result)
    }

  return (
    <>
      <Modal open={open} onClose={handleClose} id={selectionModel}/>

      <div className='flex flex-row text-purple-800 justify-center'>
        <button onClick={()=>handleOpen()} className='p-3 m-3 rounded-xl border-purple-800 border bg-blue-200 hover:bg-blue-400 mx-10'>Add Book</button>
        <button onClick={handleOpen} className='p-3 m-3 rounded-xl border-purple-800 border bg-blue-200 hover:bg-blue-400 mx-10'>Change Book</button>
        <button onClick={deleteData} className='p-3 m-3 rounded-xl border-purple-800 bg-blue-200 border  hover:bg-blue-400 mx-10'>Delete Book</button>
        </div>

        {/* <button className='p-3 m-3 rounded-xl border-black border 'onClick={getData}>Get Data</button> */}
        <div className={open?"hidden":'flex flex-col  '} style={{ height: 450, width: '90%'}}>
            <DataGrid rows={bookData} columns={columns} rowsPerPageOptions={[5]}
                sx={{left:'5%', color:'purple'}}
                checkboxSelection={true} 
                onSelectionModelChange={ (item:any) => {setSelectionModel(item)}}
                />
        </div>
        

    </>
  )
}

export default DataTable
