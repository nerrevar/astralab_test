<template>
  <div class="form-group">
    <div class="form-group-label">
      <span class="form-group-label__title">
        {{ item.label }}
      </span>
      <span
        v-if="item.hint"
        class="form-group-label__hint"
        :title="item.hint"
      >
        ?
      </span>
    </div>
    <div class="form-group-input">
      <input
        :class="[
          'form-group-input__input',
          { 'form-group-input__input_error': errorFields.indexOf(item.inputName) !== -1 }
        ]"
        :type="
          item.inputType === 'password'
            ? passwordVisible ? 'text' : 'password'
            : item.inputType
        "
        :name="item.inputName"
        ref="input"
        @input="validate($event.target.value)"
      />
      <img
        class="form-group-input__eye"
        v-if="item.inputType === 'password' && !passwordVisible"
        src="@/assets/eye.svg"
        alt=""
        @click.stop="passwordVisible = true"
      />
      <img
        class="form-group-input__eye"
        v-if="item.inputType === 'password' && passwordVisible"
        src="@/assets/eye-off.svg"
        alt=""
        @click.stop="passwordVisible = false"
      />
    </div>
    <span
      class="form-group__error"
      v-if="errorFields.indexOf(item.inputName) !== -1"
    >
      {{ item.errorMessage }}
    </span>
    <span
      class="form-group__error_hidden"
      v-else
    >
      &nbsp;
    </span>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    item: { required: true },
    errorFields: {
      type: Array,
      required: true,
    },
  },
  data () {
    return { passwordVisible: false }
  },
  methods: {
    validate (str) {
      if (this.item.validationFunction)
        if (this.item.validationFunction(str))
          this.$emit('validate', this.item.inputName)
        else
          this.$emit('invalidate', this.item.inputName)
    },
    isValid () {
      if (this.item.validationFunction)
        if (this.item.validationFunction(this.$refs.input.value))
          return true
        else {
          this.$emit('invalidate', this.item.inputName)
          return false
        }
      return true
    },
    getData () {
      return { [this.item.inputName]: this.$refs.input.value }
    },
  },
}
</script>

<style lang="sass" scoped>
.form-group
  display: flex
  flex-flow: column nowrap
  padding: 12px 0

  &-label
    display: flex
    flex-flow: row nowrap
    justify-content: space-between
    padding: 0 20px

    &__title
      font-weight: 600
      font-size: 12px
      line-height: 20px

    &__hint
      +round
      width: 14px
      height: 14px
      font-size: 11px
      text-align: center
      padding: 0
      color: #f4f4f4
      background-color: #cccbd2

      &:active:after, &:focus:after
        position: relative
        z-index: 10
        display: block
        top: 0
        right: 150px
        width: 150px

        padding: 12px
        border-radius: 12px
        font-size: 10px
        line-height: 14px
        letter-spacing: -0.4px

        content: attr(title)
        background-color: #1e1a3e
        color: #f3f3f3

  &-input
    display: flex

    &__input
      +ellipse
      flex: 1 0
      padding: 10px 2em

      &_error
        background-color: #ffe0e6

    &__eye
      position: absolute
      right: 46px
      margin-top: 6px

  &__error
    font-size: 10px
    line-height: 20px
    color: #ff7992
    padding: 0 20px

    &_hidden
      display: block
      width: 0
      height: 20px
</style>
