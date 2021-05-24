import { shallowMount } from '@vue/test-utils'

import FormTemplate from '@/components/FormTemplate.vue'

describe('FormTemplate.vue', () => {
  const vm = shallowMount(FormTemplate, {
    propsData: {
      formFields: Array(1),
      submitText: 'Sign In',
    },
  })

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('method invalidate', () => {
    vm.vm.invalidate('name')
    expect(vm.vm.errorFields).toStrictEqual(['name'])
    vm.vm.invalidate('name')
    expect(vm.vm.errorFields).toStrictEqual(['name'])
  })

  it('method invalidate', () => {
    vm.vm.validate('name')
    expect(vm.vm.errorFields).toStrictEqual([])
    vm.vm.validate('name')
    expect(vm.vm.errorFields).toStrictEqual([])
  })

  it('method validateForm on invalid', () => {
    vm.vm.$children[0].isValid = () => false
    vm.vm.validateForm()
    expect(vm.emitted('submit')).toBeFalsy()
  })

  it('method validateForm on valid', () => {
    vm.vm.$children[0].isValid = () => true
    vm.vm.$children[0].getData = () => ({ name: 'test' })
    vm.vm.validateForm()
    expect(vm.emitted('submit')).toBeTruthy()
    expect(vm.emitted('submit')[0]).toStrictEqual([{ name: 'test' }])
  })
})
