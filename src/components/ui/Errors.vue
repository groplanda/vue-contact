<template>
  <ul class="error__list">
    <li class="error__item" v-for="(err, index) in errors" :key="index">{{ err.text }}</li>
  </ul>
</template>
<script>
export default {
  name: 'Erros',
  props: {
    errors: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>