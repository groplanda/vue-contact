<template>
  <ul class="home__list">
    <ContactItem />
  </ul>
</template>
<script>
import ContactItem from './ContactItem.vue'

export default {
  name: 'ContactList',
  components: {
    ContactItem
  }
}
</script>