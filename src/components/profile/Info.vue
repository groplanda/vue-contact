<template>
  <div class="contact__info">
    <router-link :to="{name: 'home'}" class="contact__info-link"><font-awesome-icon :icon="['fas', 'home']" />&nbsp;Back to home</router-link>
    <h2 class="contact__info-name">{{ user.name }}</h2>
    <p class="contact__info-cell">{{ user.phone }}</p>
    <p class="contact__info-cell">{{ user.city }}</p>
    <button @click="$emit('showForm')" class="contact__info-edit button"><font-awesome-icon :icon="['fas', 'user-edit']" />Edit user</button>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>