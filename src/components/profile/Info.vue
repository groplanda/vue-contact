<template>
  <div class="contact__info">
    <h2 class="contact__info-name">Aleksey</h2>
    <p class="contact__info-cell">8(800)555-55-55</p>
    <p class="contact__info-cell">Volzsky</p>
    <button class="contact__info-edit button"><font-awesome-icon :icon="['fas', 'user-edit']" />Edit user</button>
  </div>
</template>
<script>
export default {
  name: 'Info',
}
</script>