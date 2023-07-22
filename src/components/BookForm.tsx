import Input from "./Input"
import { useForm } from 'react-hook-form'
import {server_calls} from '../api/server'
import { useDispatch, useStore } from "react-redux"
import {chooseTitle,chooseAuthor,choosePublisher,chooseISBN,chooseLanguage,chooseLength,chooseCover,chooseStatus,chooseRenter} from '../redux/slices/RootSlice'

interface BookFormProps {
    id?: string[];
    onClose:()=>void;
  }

  const BookForm=(props:BookFormProps)=>{
    const {register,handleSubmit}=useForm({})
    const dispatch=useDispatch()
    const store=useStore()
  
  
  const onSubmit=(data:any, event:any)=>{
    console.log(`ID: ${typeof props.id}`)
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length>0){
      server_calls.update(props.id[0],data)
      console.log(`Updated: ${data.make_model} ${props.id}`)
      setTimeout(()=>{window.location.reload()},1000);
      event.target.reset()
    }else{
        dispatch(chooseTitle(data.book_title))
        dispatch(chooseAuthor(data.author))
        dispatch(choosePublisher(data.publisher))
        dispatch(chooseISBN(data.ISBN))
        dispatch(chooseLanguage(data.language))
        dispatch(chooseLength(data.book_length))
        dispatch(chooseCover(data.cover_type))
        dispatch(chooseStatus(data.rental_status))
        dispatch(chooseRenter(data.renter))

        server_calls.create(store.getState())
        setTimeout(()=>{window.location.reload()},1000);
        event.target.reset()

    }
  }


  return (
    <div className="w-4/5">
    <form onSubmit={handleSubmit(onSubmit)}>
     <div>
        <label htmlFor="book_title">Book Title</label>
        <Input {...register('book_title')} name='book_title' placeholder="Book Title" />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <Input {...register('author')} name='author' placeholder="Author" />
      </div>
      <div>
        <label htmlFor="publisher">Publisher</label>
        <Input {...register('publisher')} name='publisher' placeholder="Publisher" />
      </div>
      <div>
        <label htmlFor="ISBN">ISBN</label>
        <Input {...register('ISBN')} name='ISBN' placeholder="ISBN (integer)" />
      </div>
      <div>
        <label htmlFor="language">Language</label>
        <Input {...register('language')} name='language' placeholder="Language" />
      </div>
      <div>
        <label htmlFor="book_length">Book Length</label>
        <Input {...register('book_length')} name='book_length' placeholder="Book Length (integer)" />
      </div>
      <div>
        <label htmlFor="cover_type">Cover Type</label>
        <Input {...register('cover_type')} name='cover_type' placeholder="Cover Type" />
      </div>
      <div>
        <label htmlFor="rental_status">Rental Status</label>
        <Input {...register('rental_status')} name='rental_status' placeholder="Rental Status" />
      </div>
      <div>
        <label htmlFor="renter">Renter</label>
        <Input {...register('renter')} name='renter' placeholder="Renter" />
      </div>
      <div>
        <button type='submit' className='p-3 m-5 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl text-white'>
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

export default BookForm
