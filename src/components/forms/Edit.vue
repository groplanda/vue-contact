<template>
  <div>
    <!--open modal start-->
    <button @click="openModal" class="button create__field yes"><font-awesome-icon :icon="['fas', 'plus']" />&nbsp;add field</button>
    <!--open modal end-->
    <form
      @submit.prevent="onEdit"
      class="form">
      <fieldset>
        <div class="form__row" v-for="(input, index) in form" :key="index">
          <AppInput :placeholder="input.name" v-model="input.value">Your {{ input.name }}</AppInput>
        </div>
      </fieldset>
      <div class="form__row">
        <button type="submit" class="form__btn button">Save contact</button>
      </div>
      <!--error list start-->
      <Errors v-if="errors.length > 0" :errors="errors"/>
      <!--error list end-->
    </form>
    <template v-if="modal">
      <Modal>
        <form class="form__new-field">
          <div class="form__row">
            <AppInput placeholder="Your field name" v-model.trim="newField.name">New field name</AppInput>
          </div>
          <div class="form__row">
            <button @click.prevent="onCreateField" type="submit" class="form__btn button">Add field</button>
          </div>
        </form>
      </Modal>
    </template>
  </div>
</template>
<script>
import AppInput from '../ui/AppInput.vue';
import Errors from '../ui/Errors.vue';
export default {
  name: 'Edit',
  components: {
    AppInput, Errors
  },
  data() {
    return {
      form: [],
      newField: {
        name: '',
        value: ''
      },
      errors: []
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    modal() {
      return this.$store.getters.getModal;
    },
  },
  methods: {
    onEdit () {
      const user = {};
      // Приведем объект инпутов к объекту пользователя для добавления в store
      Object.keys(this.form).forEach(el => {
        user[this.form[el].name] = this.form[el].value;
      })
      // Валидация полей объекта пользователя
      const validate = Object.keys(user).every(us => this.onValidate(user[us], us));
      // Если все ок
      if(validate) {
          user.id = Number(this.$route.params.id); // получим id user из route
          this.$store.dispatch('editUser', user);
          this.$emit('hideForm');
      }
    },
    openModal () {
      this.$store.dispatch('setModal', true);
    },
    onCreateField () {
      // Скроем modal и добавим новое поле в массив уже существующих
      this.$store.dispatch('setModal', false);
      this.form.push({
        ...this.newField
      })
      this.newField.name = ''
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
  },
  created() {
    // Заполним форму для генерации инпутов юзера по id
    Object.keys(this.user).forEach(user => {
      if(user !== 'id') this.form.push({ name: user, value: this.user[user] })
    })
  }
}
</script>