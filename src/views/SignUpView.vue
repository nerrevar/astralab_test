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
import FormTemplate from '@/components/FormTemplate.vue'

import {
  nameFormFieldParams,
  emailFormFieldParams,
  passwordFormFieldParams,
  repeatPasswordFormFieldParams,
} from '@/utils'

export default {
  name: 'SignUpView',
  components: { FormTemplate },
  data: () => {
    return {
      formFields: [
        nameFormFieldParams,
        emailFormFieldParams,
        passwordFormFieldParams,
        repeatPasswordFormFieldParams
      ],
      errorFields: [],
    }
  },
  methods: { submit (/* data*/) {} },
}
</script>

<style lang="sass" scoped>
.sign-in
  text-align: center
  margin-top: 2em

  & > a
    color: black
</style>
