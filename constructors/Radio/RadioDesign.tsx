import {
  type RadioProps
} from './props'
import {
  type RadioClasses,
  type RadioComponents,
  type RadioExpose,
  type RadioSetup
} from './types'
import { CheckboxDesign } from '../Checkbox/CheckboxDesign.tsx'

/**
 * RadioDesign
 */
export class RadioDesign<
  COMP extends RadioComponents,
  SETUP extends RadioSetup,
  EXPOSE extends RadioExpose,
  CLASSES extends RadioClasses,
  P extends RadioProps
> extends CheckboxDesign<
  COMP,
  SETUP,
  EXPOSE,
  CLASSES,
  P
> {
  protected type: string = 'radio'
}
