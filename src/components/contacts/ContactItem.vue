<template>
  <li class="home__item">
    <span class="home__item-name"><font-awesome-icon :icon="['fas', 'user']" />&nbsp;Aleksey</span>
    <span class="home__item-phone">8(800)555-55-55</span>
    <div class="home__item-right">
      <router-link class="home__item-link" to="/contact/1">
      <font-awesome-icon :icon="['fas', 'external-link-alt']" />
      </router-link>
      <button class="home__item-remove">
        <font-awesome-icon :icon="['fas', 'times']" />
      </button>
    </div>
  </li>
</template>
<script>
export default {
  name: 'ContactItem'
}
</script>