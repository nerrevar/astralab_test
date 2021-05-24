import {
  nameValidationFunction,
  emailValidationFunction,
  passwordValidationFunction
} from '@/utils'

describe('Utils tests', () => {
  it('name validation', () => {
    expect(nameValidationFunction('')).toBeFalsy()
    expect(nameValidationFunction('aaa')).toBeTruthy()
    expect(nameValidationFunction('Abh Ass')).toBeTruthy()
  })

  it('email validation', () => {
    expect(emailValidationFunction('aaa')).toBeFalsy()
    expect(emailValidationFunction('aaa@@gmail.com')).toBeFalsy()
    expect(emailValidationFunction('aaa@gma_l.com')).toBeFalsy()
    expect(emailValidationFunction('aaa@gmal')).toBeFalsy()
    expect(emailValidationFunction('aaa""@gmail.com')).toBeFalsy()
    expect(emailValidationFunction('aaa@gmail.com')).toBeTruthy()
    expect(emailValidationFunction('aaa.bbb@gmail.com')).toBeTruthy()
  })

  it('password validation', () => {
    expect(passwordValidationFunction('aaa')).toBeFalsy()
    expect(passwordValidationFunction('aaaaaaaa')).toBeFalsy()
    expect(passwordValidationFunction('aaaaaaAA')).toBeFalsy()
    expect(passwordValidationFunction('aaaaaaa%')).toBeFalsy()
    expect(passwordValidationFunction('aaaaaaA&')).toBeFalsy()
    expect(passwordValidationFunction('aaaaaAA^')).toBeTruthy()
  })
})
