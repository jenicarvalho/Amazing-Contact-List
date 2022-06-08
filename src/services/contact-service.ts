import api from './api'
import { ContactTypes } from '../types/contact'

const ContactService = {
  getContacts: () => api.get('/users'),
  postContact: (data: ContactTypes) => api.post('/users', data)
}

export default ContactService