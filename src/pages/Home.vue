<template>
  <div class="home">
    <div class="home__wrapper">
      <!-- contact list-->
      <ContactList/>
      <!-- contact form-->
      <Form />
    </div>
  </div>
</template>
<script>
import Form from '../components/forms/Form.vue';
import ContactList from '../components/contacts/ContactList.vue';

export default {
  name: 'Home',
  components: {
    Form, ContactList
  }
}
</script>