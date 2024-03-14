
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import "../../sass/adminPage.scss"

import { ProductContext } from '../../context/ProductContextProvider';
import { IProduct } from '../../interface/Product';

const ProductList = () => {
  const { products, onHandleRemove } = useContext(ProductContext);
  console.log(products);
  return (
    <div>
         <Link to={`product/add`}>
        <button className='Button-Add'>Add</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item: IProduct, index: number) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td><Link to={`/product/${item.id}`}>{item.name}</Link></td> {/* Thêm Link */}
              <td>{item.price}</td>
              <td>
                <img src={item.image} alt="" />
              </td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => onHandleRemove(item.id!)} className='Button-Delete'>delete</button>
                <Link to={`product/edit/${item.id}`}><button className='Button-Edit'>Edit</button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
