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
    <div class="sign-up">
      Don’t have an account yet?
      <br />
      <router-link to="/sign_up">
        Sign Up
      </router-link>
    </div>
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
import FormTemplate from '@/components/FormTemplate.vue'

export default {
  name: 'SignInView',
  components: { FormTemplate },
  data () {
    const emailValidationFunction = str => str !== '' &&
        str.replace(/^(([a-z\d+\-/]+([.][a-z\d\-+]+)*)|("[\S ]+"))@[a-z\-\d]+\.[a-z\d]+$/i, '') === ''

    const passwordValidationFunction = str => {
      if (str.length >= 8)
        if (str.match(/[~`!@#$%^&*()_\-=+{}[\]|\\/:;"'<>,.?]/i) !== null)
          if (str.match(/[A-Z]/g) !== null)
            if (str.match(/[A-Z]/g).length >= 2)
              return true

      return false
    }

    return {
      formFields: [
        {
          label: 'Email',
          inputType: 'email',
          inputName: 'email',
          errorMessage: 'Enter valid email',
          validationFunction: emailValidationFunction,
        },
        {
          label: 'Password',
          inputType: 'password',
          hint: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
          inputName: 'password',
          errorMessage: 'Enter valid password',
          validationFunction: passwordValidationFunction,
        }
      ],
      loginErrorVisible: false,
    }
  },
  methods: {
    setLoginErrorVisible (val) {
      this.loginErrorVisible = val
    },
    submit (/* data*/) {},
  },
}
</script>

<style lang="sass" scoped>
.sign-up
  text-align: center
  margin-top: 2em

  & > a
    color: black

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
