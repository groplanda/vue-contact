<template>
  <div class="control">
    <label class="form__label"><slot /></label>
      <input
        class="form__input"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
  </div>
</template>
<script>
export default {
  name: 'AppInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    }
  }
}
</script>