<template>
  <div class="wrapper">
    <div class="title">
      Sign Up
    </div>
    <FormTemplate
      :formFields="formFields"
      submitText="Sign Up"
      @submit="submit($event)"
    />
    <router-link
      class="sign-in"
      to="/sign_in"
    >
      Already have an account?
      <br />
      <span class="link">
        Sign In
      </span>
    </router-link>
    <div
      class="signup-error"
      v-if="errorText !== ''"
    >
      <span class="signup-error__text">
        {{ errorText }}
      </span>
      <img
        class="signup-error__close"
        src="@/assets/close.svg"
        alt="X"
        @click="errorText = ''"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

import FormTemplate from '@/components/FormTemplate.vue'

import {
  nameFormFieldParams,
  emailFormFieldParams,
  passwordFormFieldParams,
  repeatPasswordFormFieldParams
} from '@/utils'

export default {
  name: 'SignUpView',
  components: { FormTemplate },
  data () {
    return {
      formFields: [
        nameFormFieldParams,
        emailFormFieldParams,
        passwordFormFieldParams,
        repeatPasswordFormFieldParams
      ],
      errorFields: [],
      errorText: '',
    }
  },
  computed: mapGetters(['getFirebaseApp']),
  methods: {
    ...mapMutations(['setUser']),
    submit (data) {
      this.getFirebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then(userCredential => {
          this.getFirebaseApp.auth().currentUser.updateProfile({ displayName: data.name })
          const { email } = userCredential.user
          this.setUser({
            user: {
              displayName: data.name,
              email,
            },
          })
          this.$router.push('/main')
        })
        .catch(error => {
          this.errorText = `Sign up error: ${ error.message }`
          setTimeout(
            () => {
              this.errorText = ''
            },
            10000
          )
        })
    },
  },
}
</script>

<style lang="sass" scoped>
.sign-in
  text-align: center
  margin-top: 2em

  &:active::after
    +active
    width: calc(1em * 0.6 * 24)
    height: 40px
    left: calc(50% - 1em * 0.6 * 12)
    margin-top: -40px

.signup-error
  +ellipse
  position: absolute
  right: 12px
  bottom: 12px
  left: 12px
  display: flex
  flex-flow: row nowrap
  justify-content: space-between
  background-color: #ff6683
</style>
