import {createSlice} from '@reduxjs/toolkit'

const rootSlice=createSlice({
    name:"root",
    initialState:{
        book_title:"Book Title",
        author:"Author",
        publisher:"Publisher",
        ISBN:"ISBN",
        language:"Language",
        book_length:"Book Length",
        cover_type:"Cover Type",
        rental_status:"Rental Status",
        renter:"Renter"
    },
    reducers:{
        chooseTitle: (state,action)=>{state.book_title=action.payload},
        chooseAuthor: (state,action)=>{state.author=action.payload},
        choosePublisher: (state,action)=>{state.publisher=action.payload},
        chooseISBN: (state,action)=>{state.ISBN=action.payload},
        chooseLanguage: (state,action)=>{state.language=action.payload},
        chooseLength: (state,action)=>{state.book_length=action.payload},
        chooseCover: (state,action)=>{state.cover_type=action.payload},
        chooseStatus: (state,action)=>{state.rental_status=action.payload},
        chooseRenter: (state,action)=>{state.renter=action.payload}
    }
})

export const reducer=rootSlice.reducer
export const{chooseTitle,chooseAuthor,choosePublisher,chooseISBN,chooseLanguage,chooseLength,chooseCover,chooseStatus,chooseRenter}=rootSlice.actions