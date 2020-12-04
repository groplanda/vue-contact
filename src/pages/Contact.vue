<template>
  <div class="contact">
    <div v-if="!edit" class="contact__wrapper">
      <Info :user="user" @showForm="edit = true" />
    </div>
    <Edit v-else :user="user" @hideForm="onRender" />
  </div>
</template>
<script>
import Info from '../components/profile/Info.vue';
import Edit from '../components/forms/Edit.vue';

export default {
  name: 'Contact',
    components: {
    Info, Edit
  },
  data() {
    return {
      id: null,
      user: null,
      edit: false,
    }
  },
  computed: {

  },
  methods: {
    onRender () {
      this.getUser(this.id);
      this.edit = false;
    },
    getUser(id) {
      this.user = this.$store.getters.getUserByID(Number(id));
    }
  },
  created() {
    this.id = this.$route.params.id;
    this.getUser(this.id);
  }
}
</script>