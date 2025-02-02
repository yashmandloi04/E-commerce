import * as YUP from 'yup'

let LoginValidation = YUP.object({
  email: YUP.string().email().required('Please enter your email.'),
  password: YUP.string().required('Please enter your password.'),
})

export default LoginValidation