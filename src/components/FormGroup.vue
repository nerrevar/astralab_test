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
    <input
      :class="{
        'form-group__input': item.inputType !== 'password',
        'form-group__input_with-eye': item.inputType === 'password',
        'form-group__input_error': errorFields.indexOf(item.inputName) !== -1,
      }"
      :type="item.inputType"
      :name="item.inputName"
      ref="input"
      @input="validate($event.target.value)"
    />
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
      width: 12px
      height: 12px
      text-align: center
      padding: 0
      color: #f4f4f4
      background-color: #cccbd2

  &__input
    +ellipse
    padding: 10px 2em

    &_error
      background-color: #ffe0e6

    &_with-eye
      +ellipse
      padding: 10px 2em

      &::after
        content: 'a'
        margin-left: -20px
        background-color: black
        width: 12px
        height: 12px

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
