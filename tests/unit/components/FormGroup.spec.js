import { shallowMount } from '@vue/test-utils'
import Vue from 'vue'

import FormGroup from '@/components/FormGroup.vue'

describe('FormGroup.vue input type - text', () => {
  const nameValidationFunction = str => str.trim() !== '' && str.replace(/[a-z ]+/i, '') === ''
  const vm = shallowMount(FormGroup, {
    propsData: {
      item: {
        label: 'Full name',
        inputType: 'text',
        inputName: 'name',
        errorMessage: 'Must contain only english letters',
        validationFunction: nameValidationFunction,
      },
      errorFields: [],
    },
  })

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('label text', () => {
    expect(vm.find('.form-group-label__title').text()).toBe('Full name')
  })

  it('label hint existing', () => {
    expect(vm.find('.form-group-label__hint').exists()).toBeFalsy()
  })

  it('error message visibility', () => {
    expect(vm.find('.form-group__error').exists()).toBeFalsy()
    vm.setProps({ errorFields: ['name'] })
    Vue.nextTick(() => {
      expect(vm.find('.form-group__error').exists()).toBeTruthy()
      expect(vm.find('.form-group__error').text()).toBe('Must contain only english letters')
    })
  })

  it('method validate on aaa', () => {
    vm.find('input').setValue('aaa')
    vm.find('input').trigger('input')
    expect(vm.emitted('validate')).toBeTruthy()
  })

  it('method validate on empty', () => {
    vm.find('input').setValue('')
    vm.find('input').trigger('input')
    expect(vm.emitted('invalidate')).toBeTruthy()
  })

  it('method isValid on aaa', () => {
    vm.find('input').setValue('aaa')
    expect(vm.vm.isValid()).toBeTruthy()
  })

  it('method isValid on empty', () => {
    vm.find('input').setValue('')
    expect(vm.vm.isValid()).toBeFalsy()
    expect(vm.emitted('invalidate')).toBeTruthy()
  })

  it('method isValid with empty validation function', () => {
    vm.vm.item.validationFunction = null
    expect(vm.vm.isValid()).toBeTruthy()
  })

  it('method getData on aaa', () => {
    vm.find('input').setValue('aaa')
    expect(vm.vm.getData()).toStrictEqual({ name: 'aaa' })
  })

  it('method getData on empty', () => {
    vm.find('input').setValue('')
    expect(vm.vm.getData()).toStrictEqual({ name: '' })
  })
})
