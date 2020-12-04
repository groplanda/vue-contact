<template>
  <form
    @submit.prevent="onCreate"
    class="form"
  >
    <fieldset>
      <div class="form__row">
        <AppInput placeholder="Your name" v-model.trim="name">Name</AppInput>
      </div>
      <div class="form__row">
        <AppInput placeholder="Your phone" v-model.trim="phone">Phone</AppInput>
      </div>
      <div class="form__row">
        <AppInput placeholder="Your address" v-model.trim="address">Address</AppInput>
      </div>
      <div class="form__row">
        <button type="submit" class="form__btn button">Save contact</button>
      </div>
    </fieldset>
    <!--error list start-->
    <Errors v-if="errors.length > 0" :errors="errors"/>
    <!--error list end-->
  </form>
</template>
<script>
import AppInput from '../ui/AppInput.vue';
import Errors from '../ui/Errors.vue';
export default {
  name: 'Form',
  components: {
    AppInput, Errors
  },
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
      // Добавление нового пользователя
      if(this.onValidate(this.name, 'Name') && this.onValidate(this.phone, 'Phone') && this.onValidate(this.address, 'Address')) {
        // Если все поля заполнены, то создаем объект user
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
      // Валидация полей
      this.errors = [];
      if(val === '') {
        this.errors.push({text: `${field} is required!`});
        return false;
      }
      return true;
    },
    clearForm() {
      // Очистка полей формы
      this.name = '';
      this.phone = '';
      this.address = '';
    }
  },
}
</script>