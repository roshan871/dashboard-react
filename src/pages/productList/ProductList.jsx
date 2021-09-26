import './ProductList.css';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@material-ui/icons";
 import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProductList() {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter( (item) => item.id !== id));
   }
   const columns = [
    { field: 'id', headerName: 'ID', width: 92 },
    { 
        field: 'product',
         headerName: 'Product', 
         width: 200, 
         renderCell: (params) => {
        return (
            <div className='productListItem'>
                <img className='ProductListImg' src={params.row.img} alt='' />
                {params.row.name}
            </div>
        )
    } },
    { field:'stock', headerName: 'stock', width: 200 },
    {
      field: 'status',
      headerName: 'status',
      width: 120,
    },
    {
        field: 'price',
        headerName: 'price',
        width: 160,
      },
      {
          field: 'action',
          headerName: 'price',
          width: 160,
          renderCell:(params) => {
              return(
                <>
                    <Link to={'/product/' + params.row.id}>
                        <button className='productListEdit'>Edit</button>
                    </Link>
                    <DeleteOutline
                        className='productListDelete'
                         onClick={ () => handleDelete(params.row.id)}
                     />
                </>
              )
          }
      },
];
  
    return (
        <div className='productList'>
            <DataGrid
            rows={data}
             columns={columns}
                 pageSize={8}
                 checkBoxSelection
             />
        </div>
    )
}

export default ProductList;
