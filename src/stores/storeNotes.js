import { defineStore } from "pinia";
import {db} from "@/js/firebase";
import { collection, getDocs, onSnapshot, doc, setDoc, deleteDoc, updateDoc, query, orderBy, limit, addDoc } from "firebase/firestore";

const notesCollectionRef = collection(db, "notes")
const notesCollectionQuery = query(notesCollectionRef, orderBy("date", "desc"));
export const useStoreNotes = defineStore('storeNotes', {
  state: () => {
    return { 
      notes: [
        // {
        //   id: 'id1',
        //   content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
        // },
        // {
        //   id: 'id2',
        //   content: 'This is a second note.'
        // }
      ],
      notesLoaded: false
  
    }
  },
  actions: {
    async getNotes(){
      // const querySnapshot = await getDocs(collection(db, "notes"));
      // querySnapshot.forEach((doc) => {
      //   // console.log(doc.id, " => ", doc.data());
      //   let note = {
      //     id: doc.id,
      //     content: doc.data().content
      //   }
      //   this.notes.push(note)
      // })

      //firebase 功能
      this.notesLoaded = false
      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        let notes = [];
        querySnapshot.forEach((doc) => {
          let note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date
          }
          notes.push(note)
        });
        this.notes = notes;
        this.notesLoaded = true
      })
    },
    async addNote(newNoteContent) {
      let currentDate = new Date().getTime(), //會獲取整數
          date = currentDate.toString()
          // id = currentDate.toString()
      // let note = {
      //   id,
      //   content: newNoteContent
      // }
      // this.notes.unshift(note)

      //firebase 功能
      // await setDoc(doc(notesCollectionRef, id), {  //第三個參數是id
      //   content: newNoteContent,
      //   id
      // });

      await addDoc(notesCollectionRef, {
        content: newNoteContent,
        date
      });
    },
    async deleteNote(idToDelete){ 
      // this.notes = this.notes.filter(note => note.id !== idToDelete)

      //firebase 功能
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async updateNote(id, content){
      // let index = this.notes.findIndex(note =>  note.id === id)
      // this.notes[index].content = content

      //firebase 功能
      await updateDoc(doc(notesCollectionRef, id), {
        content
      });
    }
  },
  getters: {
    //如果只是要return一個值，可以直接return
    // getNoteContent: (state) => { 
    //   return 'XXX'
    // },

    //如果要帶參數需要return一個物件
    getNoteContent: (state) => { 
      return (id) => {
        return state.notes.filter(note => note.id === id)[0].content
      }
    },
    totalNotesCount: (state) => {
      return state.notes.length 
    },
    totalCharactersCount: (state) => { 
      let count = 0
      state.notes.forEach(note => {
        count += note.content.length
      })
      return count
     }
  }
})