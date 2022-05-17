import { atom } from 'jotai'

export const role = atom('' || localStorage.getItem('role'))