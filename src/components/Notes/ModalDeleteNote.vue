<template>
 <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card" ref="modalCardRef">
    <header class="modal-card-head">
      <p class="modal-card-title">Delete Note?</p>
      <button class="delete" aria-label="close" @click="closeModal"></button>
    </header>
    <section class="modal-card-body">
      Are you sure you want to delete this note?
    </section>
    <footer class="modal-card-foot is-justify-content-flex-end">
      <button class="button" @click="closeModal">Cancel</button>
      <button class="button is-danger" @click="storeNotes.deleteNote(noteId)">Delete</button>
    </footer>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";

 /* props */
 const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String,
    required: true
  }
 })
 /* emits */
 const emit = defineEmits(['update:modelValue'])

 /* store */
 const storeNotes = useStoreNotes()

 /* close modal */
 const closeModal = () => {
   emit('update:modelValue', false)
 }

 /* click outside to close */
 const modalCardRef = ref(null)
 onClickOutside(modalCardRef, closeModal)

/* keyboard control */
const handleKeyboard = e => {
  if(e.key === 'Escape') closeModal()
}


 /* keyboard control */
onMounted(() => {
  document.addEventListener('keyup', handleKeyboard)
})
 //監聽完需要remove否則會繼續監聽 
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard)
})
</script>