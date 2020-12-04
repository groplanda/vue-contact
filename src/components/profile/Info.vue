<template>
  <div class="contact__info">
    <router-link :to="{name: 'home'}" class="contact__info-link"><font-awesome-icon :icon="['fas', 'home']" />&nbsp;Back to home</router-link>
    <p v-for="(el, index) in info" :key="index" class="contact__info-cell">{{ index }}: {{ el }}</p>
    <button @click="$emit('showForm')" class="contact__info-edit button"><font-awesome-icon :icon="['fas', 'user-edit']" />Edit user</button>
  </div>
</template>
<script>
export default {
  name: 'Info',
  data() {
    return {
      info: {}
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  created() {
    Object.keys(this.user).forEach(el => {
      if(el !== 'id') this.info[el] = this.user[el];
    })
  }
}
</script>