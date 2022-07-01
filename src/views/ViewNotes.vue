<template>
  <div class="notes">
    <AddEditNote v-model="newNote" placeholder="Add a new note" ref="addEditNoteRef">
      <template #buttons>
         <button 
          @click="addNote" 
          :disabled="!newNote"
          class="button is-link has-background-success">
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100"/>
    <!-- <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add a new note"
            ref="newNoteRef"
          />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button 
            @click="addNote" 
            :disabled="!newNote"
            class="button is-link has-background-success">
            Add New Note
          </button>
        </div>
      </div>
    </div> -->
    <template v-else>
      <Note 
        v-for="note in storeNotes.notes"
        :key="note.id"
        :note="note"
      />
      <div v-if="!storeNotes.notes.length" 
      class="is-size-4 has-text-centered has-text-grey-light is-family-monospace py-6">
        No notes here yet...
      </div>
    </template>
  </div>
</template>

<script setup>
/*
  import
*/
  import { ref, onMounted } from 'vue'
  import Note from '@/components/Notes/Note.vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useStoreNotes } from '@/stores/storeNotes'
  import { useWatchCharacters } from "@/use/useWatchCharacters";

/*
  store
*/
const storeNotes = useStoreNotes()

/*
  note
*/
const newNote = ref('')
const addEditNoteRef = ref(null)
// const newNoteRef = ref(null)
// const notes = ref([
//   {
//     id: 'id1',
//     content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ipsa commodi sint ut ullam culpa nulla molestiae sunt quia qui maxime, enim quasi officiis aperiam fugit, corrupti omnis, eaque animi.'
//   },
//   {
//     id: 'id2',
//     content: 'This is a second note.'
//   }
// ])
  
const addNote = () => {
  storeNotes.addNote(newNote.value)

  // let currentDate = new Date().getTime(), //會獲取整數
  //     id = currentDate.toString()
  // let note = {
  //   id,
  //   content: newNote.value
  // }
  // notes.value.unshift(note)
  newNote.value = ''
  addEditNoteRef.value.focusTextarea()
  // newNoteRef.value.focus() 
}  

/*
  delete note
*/
// const deleteNote = idToDelete => {
//   notes.value = notes.value.filter(note => note.id !== idToDelete)
// }


/*
  watch
*/
useWatchCharacters(newNote)



/* mounted */
onMounted(() => {
  storeNotes.getNotes()
})

</script>