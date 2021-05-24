<template>
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
      {{ submitText }}
    </div>
  </div>
</template>

<script>
import FormGroup from '@/components/FormGroup.vue'

export default {
  name: 'FormTemplate',
  components: { FormGroup },
  props: {
    formFields: {
      type: Array,
      required: true,
    },
    submitText: {
      type: String,
      required: true,
    },
  },
  data () {
    return { errorFields: [] }
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
      if (this.errorFields.length === 0) {
        const result = {}
        for (const child of this.$children)
          if (child.isValid())
            Object.assign(result, child.getData())

        if (Object.keys(result).length === this.formFields.length)
          this.$emit('submit', result)
      }
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
</style>
