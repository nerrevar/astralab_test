import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import router from '@/router'
import store from '@/store'

import SignInView from '@/views/SignInView.vue'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

jest.mock('firebase', () => ({
  app: jest.fn(),
  auth: jest.fn(),
}))

describe('SignInView.vue', () => {
  const vm = shallowMount(
    SignInView,
    {
      localVue,
      store,
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
    vm.vm.submit({
      email: '',
      password: '',
    })
    vm.vm.$nextTick(() => expect(vm.find('.login-error').isVisible()).toBeTruthy())

    vm.vm.submit({
      email: '123@example.com',
      password: '12345^AA',
    })
    vm.vm.$nextTick(() => expect(store.state.user.email).toBeUndefined())
  })
})
