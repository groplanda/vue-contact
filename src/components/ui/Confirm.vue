<template>
  <div class="confirm">
    <p class="confirm__title">Are you sure?</p>
    <div class="confirm__buttons">
      <button class="button yes" @click="onAnswer(true)">Yeas</button>
      <button class="button nope" @click="onAnswer(false)">No</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Confirm',
  methods: {
    onAnswer(val) {
      this.$store.dispatch('setModal', false);
      this.$emit('answer', val);
    }
  }
}
</script>