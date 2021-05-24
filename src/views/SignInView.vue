<template>
  <div class="wrapper">
    <div class="title">
      Sign In
    </div>
    <FormTemplate
      :formFields="formFields"
      submitText="Sign In"
      @submit="submit($event)"
    />
    <router-link
      class="sign-up"
      to="/sign_up"
    >
      Don’t have an account yet?
      <br />
      <span class="link">
        Sign Up
      </span>
    </router-link>
    <div
      class="login-error"
      v-show="loginErrorVisible"
    >
      <span class="login-error__text">
        Wrong email or password
      </span>
      <img
        class="login-error__close"
        src="@/assets/close.svg"
        alt="X"
        @click="setLoginErrorVisible(false)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import FormTemplate from '@/components/FormTemplate.vue'

import {
  emailFormFieldParams,
  passwordFormFieldParams
} from '@/utils'

export default {
  name: 'SignInView',
  components: { FormTemplate },
  data () {
    return {
      formFields: [
        emailFormFieldParams,
        passwordFormFieldParams
      ],
      loginErrorVisible: false,
    }
  },
  computed: mapGetters(['getFirebaseApp']),
  methods: {
    ...mapMutations(['setUser']),
    setLoginErrorVisible (val) {
      this.loginErrorVisible = val
    },
    submit (data) {
      this.getFirebaseApp.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(userCredential => {
          const { displayName, email } = userCredential.user
          this.setUser({
            user: {
              displayName,
              email,
            },
          })
          this.$router.push('/main')
        })
        .catch(() => {
          this.loginErrorVisible = true
          setTimeout(
            () => {
              this.loginErrorVisible = false
            },
            10000
          )
        })
    },
  },
}
</script>

<style lang="sass" scoped>
.sign-up
  text-align: center
  margin-top: 2em

  &:active::after
    +active
    width: calc(1em * 0.6 * 26)
    height: 40px
    left: calc(50% - 1em * 0.6 * 13)
    margin-top: -40px

.login-error
  +ellipse
  position: absolute
  right: 12px
  bottom: 12px
  left: 12px
  height: 48px
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  background-color: #ff6683
</style>
