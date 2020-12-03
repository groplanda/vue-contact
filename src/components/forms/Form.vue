<template>
  <form class="form">
    <div class="form__row">
      <label class="form__label">Name</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your name"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Phone</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your phone"
      />
    </div>
    <div class="form__row">
      <label class="form__label">Address</label>
      <input
      type="text"
      class="form__input"
      placeholder="Your address"
      />
    </div>
    <div class="form__row">
      <button type="submit" class="form__btn button">Save contact</button>
    </div>
  </form>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      phone: '',
      address: ''
    }
  }
}
</script>