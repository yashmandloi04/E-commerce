import * as YUP from 'yup'

const AdminLoginValidation = YUP.object({
  username: YUP.string().required('Please enter your username.'),
  password: YUP.string().required('Please enter your password.'),
})

export default AdminLoginValidation