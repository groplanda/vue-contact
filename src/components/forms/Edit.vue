<template>
  <form
  @submit.prevent="onEdit"
  class="form">
    <div class="form__row">
      <label class="form__label">Name</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your name"
      v-model="name"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Phone</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your phone"
      v-model="phone"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Address</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your address"
      v-model="address"
      />
    </div>
    <div class="form__row">
      <button type="submit" class="form__btn button">Save contact</button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Edit',
  data() {
    return {
      name: this.user.name,
      phone: this.user.phone,
      address: this.user.city,
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    onEdit() {
      const user = {
        id: this.user.id,
        name: this.name,
        phone: this.phone,
        city: this.address,
      }
      this.$store.dispatch('editUser', user);
      this.$emit('hideForm');
    }
  }
}
</script>