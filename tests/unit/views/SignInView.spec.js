import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import router from '@/router'

import SignInView from '@/views/SignInView.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)

describe('SignInView.vue', () => {
  const vm = shallowMount(
    SignInView,
    {
      localVue,
      router,
    }
  )

  it('renders', () => {
    expect(vm.element).toMatchSnapshot()
  })

  it('setLoginErrorVisible true', () => {
    expect(vm.find('.login-error').isVisible()).toBeFalsy()
    vm.vm.setLoginErrorVisible(true)
    vm.vm.$nextTick(() => {
      expect(vm.find('.login-error').isVisible()).toBeTruthy()
    })
  })

  it('method submit', () => {
    expect(vm.vm.submit()).toBeUndefined()
  })
})
