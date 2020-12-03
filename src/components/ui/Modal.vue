<template>
  <div class="popup">
    <div class="popup__dialog">
      <div class="popup__modal">
        <button class="popup__modal-close" @click="closeModal">
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
        <div class="popup__modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    closeModal() {
      this.$store.dispatch('setModal', false)
    }
  },
}
</script>
<style lang="scss" scoped>
  .popup {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba($color: #000000, $alpha: .5);
    &__modal {
      max-width: 100%;
      width: 30rem;
      position: absolute;
      padding: 30px;
      border-radius: 10px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
    }
    &__modal-close {
      border: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 20px;
      font-size: 14px;
      background: #7a4eff;
      color: #fff;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
</style>