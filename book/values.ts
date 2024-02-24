import { Icons } from '../classes/Icons'

import { makeIconsC2 } from '../c2/icons'

makeIconsC2()

export const image: Record<string, string> = {
  Search: 'search',
  Home: 'home',
  'Account circle': 'account_circle',
  Settings: 'settings',
  Done: 'done',
  Info: 'info',
  'Check circle': 'check_circle',
  Delete: 'delete',
  Visibility: 'visibility',
  'Visibility (off)': 'visibility_off',
  'Image (1)': 'https://drscdn.500px.org/photo/294267357/q%3D80_m%3D2000/v2?sig=03989c1970e5921d8ab67b23e03e79b8db13b7e7d3bc3f72829cc9eecbb42cf4',
  'Image (2)': 'https://drscdn.500px.org/photo/292683549/q%3D80_m%3D2000/v2?sig=bcf16bbbd7b11052a17012bf2be91a0c95edb8d0a45f2928ab72b027ca30fb85'
}

export const icons = Icons.getNameList()

export const percent: string[] = [
  '0%',
  '10%',
  '25%',
  '50%',
  '75%',
  '100%'
]
