<template>
  <div class="wrapper">
    <div class="title">
      Sign Up
    </div>
    <div class="form">
      <FormGroup
        v-for="(item, index) in formFields"
        :key="index"
        :item="item"
        :errorFields="errorFields"
        @invalidate="invalidate($event)"
        @validate="validate($event)"
      />
      <div
        class="form__submit"
        @click="validateForm"
      >
        Sign Up
      </div>
    </div>
    <div class="sign-in">
      Already have an account?
      <br />
      <router-link to="/sign_in">
        Sign In
      </router-link>
    </div>
  </div>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue'

export default {
  name: 'SignUpView',
  components: { FormGroup },
  data: () => {
    const nameValidationFunction = str => str.trim() !== '' || str.replace(/[a-z ]+/i, '') === ''

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
          label: 'Full name',
          inputType: 'text',
          inputName: 'name',
          errorMessage: 'Must contain only english letters',
          validationFunction: nameValidationFunction,
        },
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
        },
        {
          label: 'Repeat password',
          inputType: 'password',
          inputName: 'passwordReapeat',
          errorMessage: 'Enter valid password',
          validationFunction: passwordValidationFunction,
        }
      ],
      errorFields: [],
    }
  },
  methods: {
    invalidate (name) {
      if (this.errorFields.indexOf(name) === -1)
        this.errorFields.push(name)
    },
    validate (name) {
      const index = this.errorFields.indexOf(name)
      if (index !== -1)
        this.errorFields.splice(index, 1)
    },
    validateForm () {

    },
  },
}
</script>

<style lang="sass" scoped>
.form
  border-radius: 40px
  padding: 22px
  background-color: white

  &__submit
    +ellipse
    background-color: #1e1a3e
    color: white
    text-align: center

.sign-in
  text-align: center

  & > a
    color: black
</style>
