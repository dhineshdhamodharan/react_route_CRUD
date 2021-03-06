import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./productcontext";
function Products(){
    const productContext = useContext(ProductContext)

    let handleDelete=(index)=>{
        let confirm=window.confirm("Do you want to delete?");
        if(confirm)
        {
            productContext.productList.splice(index-1,1);
            productContext.setProductList([...productContext.productList])
        }
    }
    
    return(
        <>
       
        <h1 class="h3 mb-2 text-gray-800">Products</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>
                            <Link to="/create-product" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
        <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Expiry Date</th>
                                            <th>Manufacturing date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>ID</th>
                                            <th>Product Name</th>
                                            <th>Price</th>
                                            <th>Expiry Date</th>
                                            <th>Manufacturing date</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            productContext.productList.map((obj,index)=>{
                                                return <tr>
                                             <td>{index+1}</td>       
                                            <td>{obj.productName}</td>
                                            <td>{obj.price}</td>
                                            <td>{obj.expiryDate}</td>
                                            <td>{obj.manufacturingDate}</td>
                                            <td>
                                                <Link to={`/products/edit/${index+1}`}className="btn btn-sm btn-primary">Edit</Link>
                                                <button onClick={()=>handleDelete(index+1)} className="btn btn-sm btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </>
    )
}
export default Products;