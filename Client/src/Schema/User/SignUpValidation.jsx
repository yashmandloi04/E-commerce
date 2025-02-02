import axios from 'axios'
import * as YUP from 'yup'
import { API_URL } from '../../Helpers/Path'

let signUpValidation = YUP.object({
  name: YUP.string().required('Please enter your name.'),
  email: YUP.string().email().test('checkEmail', 'Email already exist.', async (emailField) => {
    let response = await axios.get(`${API_URL}/signup/${emailField}`)
    // .then(Response => Response.data)
    return response.data
  }).required('Please enter your email id.'),
  password: YUP.string().required('Please enter your password.'),
  rePassword: YUP.string().oneOf([YUP.ref('password')]).required('Please Re enter your password.'),
  contact: YUP.number().typeError('Please enter valid contact no.').required('Please enter your contact no.'),
  address: YUP.string().required('Please enter your address.'),
  gender: YUP.string().required('Please select your gender.'),
  state: YUP.string().required('Please select your state.'),
  city: YUP.string().required('Please select your city.'),
})

export default signUpValidation