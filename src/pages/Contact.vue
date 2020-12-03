<template>
  <div class="contact">
    <div class="contact__wrapper">
      <Info />
    </div>

    <form class="form">
      <div class="form__row">
        <label class="form__label">Name</label>
        <input type="text" class="form__input" placeholder="Your name" value="Aleksey" />
      </div>
      <div class="form__row">
        <label class="form__label">Phone</label>
        <input type="text" class="form__input" placeholder="Your phone" value="8(800)555-55-55" />
      </div>
      <div class="form__row">
        <label class="form__label">Address</label>
        <input type="text" class="form__input" placeholder="Your address" value="Volzsky" />
      </div>
      <div class="form__row">
        <button type="submit" class="form__btn button">Save contact</button>
      </div>
    </form>

  </div>
</template>
<script>
import Info from '../components/profile/Info.vue'
export default {
  name: 'Contact',
  components: {
    Info
  }
}
</script>