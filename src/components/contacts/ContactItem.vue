<template>
  <li class="home__item">
    <span class="home__item-name"><font-awesome-icon :icon="['fas', 'user']" />&nbsp;{{user.name }}</span>
    <span class="home__item-phone">{{user.phone }}</span>
    <div class="home__item-right">
      <router-link class="home__item-link" :to="`/contact/${user.id}`">
      <font-awesome-icon :icon="['fas', 'external-link-alt']" />
      </router-link>
      <button class="home__item-remove" @click="$emit('onRemove', user.id)">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>

  </li>
</template>
<script>
export default {
  name: 'ContactItem',
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>