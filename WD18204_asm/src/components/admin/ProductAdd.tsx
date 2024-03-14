import React, { useContext } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContextProvider';
import "../../sass/adminPage.scss"


type FormValue= {
    name: string;
    price:number;
    description:string;
    image:string;
}
const ProductAdd = () => {
    const {onHandleAdd}=useContext(ProductContext);
    const{
        register,
        handleSubmit,
        formState:{ errors }
    }=useForm<FormValue>()


    const navigate=useNavigate();

    const onSubmit:SubmitHandler<FormValue>=data=>{
        onHandleAdd(data);
        navigate('/admin')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name:</label>
        <input type="text" {...register("name",{required:true})} placeholder='Name'/>
        <br />
        {errors.name && <span>không được để trống</span>}
        
        <label htmlFor="">price</label>
        <input type="text"{...register('price',{required:true})} placeholder='Price'/>
        <br />
        {errors.price && <span>Không được để trống</span>}

        <label htmlFor="">image</label>
        <input type="text"{...register('image',{required:true})} placeholder='Image' />
        <br />
        {errors.image && <span>Không được để trống</span>}

        <label htmlFor="">description</label>
        <input type="text"{...register('description',{required:true})} placeholder='Description'/>
        <br />
        {errors.description && <span>Không được để trống</span>}
      <br />
      <button type='submit' className='Submit'>submit</button>
      </form>
    </div>
  )
}

export default ProductAdd
