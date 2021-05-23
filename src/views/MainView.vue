<template>
  <div class="wrapper">
    <div class="title">
      Hello, {{ user.name }}!
    </div>
    <img
      class="main-img"
      src="@/assets/woman_main.svg"
      alt=""
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MainView',
  computed: mapState({ user: state => state.user }),
}
</script>

<style lang="sass" scoped>
.wrapper
  justify-content: space-between

.title
  margin-top: 40%
</style>
