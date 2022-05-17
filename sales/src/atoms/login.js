import { atom } from 'jotai'

const isLogin = localStorage.getItem('id') !== null ? true : false

export const loginState = atom(isLogin)