<template>
  <div
    class="card mb-4"
  >
    <div class="card-content">
      <div class="content">
        {{note.content}}
        <div class="columns is-mobile has-text-grey-light mt-2">
          <!-- <small>{{ characterLength }} characters</small> -->
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }} characters</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink :to="`/editNote/${ note.id }`" class="card-footer-item">Edit</RouterLink>
      <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
    </footer>
    <ModalDeleteNote 
      v-if="modals.deleteNote" 
      v-model="modals.deleteNote"
      :noteId="note.id"
    />
  </div>
</template>

<script setup>
/*
import
*/
import { computed, reactive } from 'vue'
import { useDateFormat } from '@vueuse/core'
import ModalDeleteNote from "@/components/Notes/ModalDeleteNote.vue";
import { useStoreNotes } from '@/stores/storeNotes'

/*
  store
*/
const storeNotes = useStoreNotes()

/* date formatted */
const dateFormatted = computed(()=> {
  let date = new Date(parseInt(props.note.date))
  let formattedDate = useDateFormat(date, 'YYYY-MM-DD HH:mm:ss')
  return formattedDate.value
})


/*
  props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

/*
  emits
*/
// const emit = defineEmits(['deleteClicked'])


/*
  character length
*/

const characterLength = computed(() => {
  let length = props.note.content.length,
      description = length > 1 ? 'characters' : 'character'
  return `${ length } ${ description }`
})

/*
 handle delete clicked
*/
// const handleDeleteClicked = () => {
//   emit('deleteClicked', props.note.id)
// }

/* Modal */
const modals = reactive({
  deleteNote: false
}) 

</script>

