<template>
  <div class="edit-note">
    <AddEditNote 
      v-model="noteContent" 
      bgColor="link" 
      placeholder="Edit note" 
      label="Edit note"
      ref="addEditNoteRef"
      >
      <template #buttons>
        <!-- <RouterLink 
          to="/"
          class="button is-link is-light"
          >
          Cancel
        </RouterLink> -->
        <!-- <button 
         @click="$router.back()"
          class="button is-link is-light"
          >
          Cancel
        </button> -->
         <button 
         @click="$router.push('/')"
          class="button is-link is-light mr-3"
          >
          Cancel
        </button>
         <button 
          class="button is-link has-background-link"
          @click="handelSaveClicked"
          :disabled="!noteContent"
          >
          Save Note
        </button>
      </template>
    </AddEditNote>
  </div>
</template>

<script setup>
/*
  import
*/
  import {ref} from 'vue'
  import AddEditNote from '@/components/Notes/AddEditNote.vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useStoreNotes } from '@/stores/storeNotes'

/* store */
  const storeNotes = useStoreNotes()
  console.log(storeNotes)

/* route */
  const route = useRoute()
  const router = useRouter()

/* note */
  const noteContent = ref('')
  noteContent.value = storeNotes.getNoteContent(route.params.id)

/* save click */
  const handelSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
  }
</script>