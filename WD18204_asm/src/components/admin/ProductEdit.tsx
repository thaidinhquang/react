import React, { useContext, useEffect } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ProductContext } from '../../context/ProductContextProvider';
import "../../sass/adminPage.scss"

type FormValue= {
    name: string;
    price:number;
    description:string;
    image:string;
}
const ProductEdit = () => {
    const {onHandleEdit}=useContext(ProductContext);
    const {id}=useParams()
    const{
        register,
        handleSubmit,
        formState:{ errors },
        reset,
    }=useForm<FormValue>()


    const navigate=useNavigate();

    useEffect(()=>{
        (async()=>{
            const {data}= await axios.get(`http://localhost:3000/products/${id}`);
            reset(data);
        })()
    },[id])

    const onSubmit:SubmitHandler<FormValue>=data=>{
        onHandleEdit(data);
        navigate('/admin')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">name:</label>
        <input type="text" {...register("name",{required:true})} />
        <br />
        {errors.name && <span>không được để trống</span>}
        
        <label htmlFor="">price</label>
        <input type="text"{...register('price',{required:true})} />
        <br />
        {errors.price && <span>Không được để trống</span>}

        <label htmlFor="">image</label>
        <input type="text"{...register('image',{required:true})} />
        <br />
        {errors.image && <span>Không được để trống</span>}

        <label htmlFor="">description</label>
        <input type="text"{...register('description',{required:true})} />
        <br />
        {errors.description && <span>Không được để trống</span>}
      <br />
      <button className='Submit'>submit</button>
      </form>
    </div>
  )
}

export default ProductEdit
