import { atom } from 'jotai'

export const loginState = atom(false || localStorage.getItem('id') )