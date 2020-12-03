<template>
  <form
  @submit.prevent="onCreate"
  class="form"
  >
    <div class="form__row">
      <label class="form__label">Name</label>
      <input
      v-model.trim="name"
      type="text"
      class="form__input"
      ref="name"
      placeholder="Your name"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Phone</label>
      <input
      v-model.trim="phone"
      type="text"
      class="form__input"
      ref="phone"
      placeholder="Your phone"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Address</label>
      <input
      v-model.trim="address"
      type="text"
      class="form__input"
      placeholder="Your address"
      ref="address"
      />
    </div>
    <div class="form__row">
      <button type="submit" class="form__btn button">Save contact</button>
    </div>
    <ul class="error__list" v-if="errors.length > 0">
      <li class="error__item" v-for="(err, index) in errors" :key="index">{{ err.text }}</li>
    </ul>
  </form>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      phone: '',
      address: '',
      errors: []
    }
  },
  methods: {
    onCreate() {
      if(this.onValidate(this.name, 'Name') && this.onValidate(this.phone, 'Phone') && this.onValidate(this.address, 'Address')) {
        const user = {
          name: this.name,
          phone: this.phone,
          city: this.address,
        }
        this.$store.dispatch('addUser', user);
        this.clearForm();
      }
    },
    onValidate(val, field) {
      this.errors = [];
      if(val === '') {
        this.errors.push({text: `${field} is required!`});
        return false;
      }
      return true;
    },
    clearForm() {
      this.name = '';
      this.phone = '';
      this.address = '';
    }
  },
}
</script>