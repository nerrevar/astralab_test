export const nameValidationFunction = str => str.trim() !== '' && str.replace(/[a-z ]+/i, '') === ''

export const emailValidationFunction = str => str !== '' &&
    str.replace(/^(([a-z\d+\-/]+([.][a-z\d\-+]+)*)|("[\S ]+"))@[a-z\-\d]+\.[a-z\d]+$/i, '') === ''

export const passwordValidationFunction = str => {
  if (str.length >= 8)
    if (str.match(/[~`!@#$%^&*()_\-=+{}[\]|\\/:;"'<>,.?]/i) !== null)
      if (str.match(/[A-Z]/g) !== null)
        if (str.match(/[A-Z]/g).length >= 2)
          return true

  return false
}

export const nameFormFieldParams = {
  label: 'Full name',
  inputType: 'text',
  inputName: 'name',
  errorMessage: 'Must contain only english letters',
  validationFunction: nameValidationFunction,
}

export const emailFormFieldParams = {
  label: 'Email',
  inputType: 'email',
  inputName: 'email',
  errorMessage: 'Enter valid email',
  validationFunction: emailValidationFunction,
}

export const passwordFormFieldParams = {
  label: 'Password',
  inputType: 'password',
  hint: 'Password must contain 8+ symbols, 1 special and 2 capital letters',
  inputName: 'password',
  errorMessage: 'Enter valid password',
  validationFunction: passwordValidationFunction,
}

export const repeatPasswordFormFieldParams = {
  label: 'Repeat password',
  inputType: 'password',
  inputName: 'passwordReapeat',
  errorMessage: 'Enter valid password',
  validationFunction: passwordValidationFunction,
}
