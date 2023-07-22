import BookForm from './BookForm'

type Props={
    id?: string[],

    open:boolean; 
    onClose:()=>void;}
const Modal=(props:Props)=> {
    if (!props.open) return (<></>)
    return(
        <div onClick={ props.onClose } className='fixed w-full h-full flex overflow-auto z-1 justify-center align-middle bg-black bg-opacity-25'>
        <div className='overflow-y-scroll scroll-auto w-4/12 h-4/5 fixed flex z-1 mt-2 bg-white shadow-xl rounded flex-col' onClick={(e) => {e.stopPropagation()}}>
            <button className="mt-10 mx-20 bg-gray-400 hover:bg-gray-500 justify-center rounded-2xl w-1/12 text-white" onClick={props.onClose}>
                X
            </button>
            <div className="flex flex-col items-center text-center mt-3 p-2 ">
                <BookForm id={props.id} onClose={props.onClose}/>
            </div>
        </div>
    </div>
)
}

export default Modal
