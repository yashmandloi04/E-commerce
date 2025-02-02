import axios from 'axios'
import * as YUP from 'yup'
import { API_URL } from '../../Helpers/Path'

const NewAdminValidation = YUP.object({
  username: YUP.string().test('checkUsername','Username already taken.', async (currUsername)=>{
    let response = await axios.get(`${API_URL}/customadmin/${currUsername}`)
    // console.log(response)
    return response.data
  }).required('Please enter a username.'),
  password: YUP.string().required('Please enter a password.'),
  rePassword: YUP.string().oneOf([YUP.ref('password')]).required('Password does not match.'),
  type: YUP.boolean(),
})

export default NewAdminValidation