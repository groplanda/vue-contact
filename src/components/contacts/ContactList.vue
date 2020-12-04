<template>
    <div>
      <ul v-if="users.length" class="home__list">
      <ContactItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        @onRemove="remove"
      />
      </ul>
      <p v-else class="home__list-message">Users not found...</p>
      <template v-if="modal">
        <Modal>
          <Confirm @answer="answer = $event" />
        </Modal>
      </template>
    </div>
</template>
<script>
import ContactItem from './ContactItem.vue'
import Confirm from '../ui/Confirm.vue';

export default {
  name: 'ContactList',
  components: {
    ContactItem, Confirm
  },
  data() {
    return {
      answer: false,
      removeId: null
    }
  },
  computed: {
    users() {
      return this.$store.getters.getUsers;
    },
    modal() {
      return this.$store.getters.getModal;
    },
  },
  watch: {
    answer() {
      this.checkModal();
    }
  },
  methods: {
    remove(id) {
      // удаление по id
      this.removeId = id;
      this.$store.dispatch('setModal', true);
    },
    checkModal() {
      // проверка ответа из modal
      if(this.answer) {
        this.$store.dispatch('removeUser', this.removeId)
        .then(() => {
          this.answer = false;
          this.removeId = null;
        })
      }
    }
  },
}
</script>