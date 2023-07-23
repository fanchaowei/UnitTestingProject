import axios from 'axios'

export function sendEmail() {
  axios.post('/email')
}
