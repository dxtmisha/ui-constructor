export type Undefined = undefined | null
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'
export type NumberOrString = number | string
export type NumberOrStringOrDate = NumberOrString | Date
export type ObjectItem<T = any> = Record<string, T>
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>

export type FunctionReturn<R = any> = () => R
export type FunctionVoid = () => void
export type FunctionArgs<T, R> = (...args: T[]) => R

export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R

// Item
export type ItemList<T = any> = Record<string, T>

// Element
export type ElementOrWindow = HTMLElement | Window
export type ElementOrString<E extends ElementOrWindow> = E | string

export type EventOptions = AddEventListenerOptions | boolean | undefined
export type EventListenerDetail<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void
export type EventActivityItem<E extends ElementOrWindow> = {
  element: E | undefined
  type: string
  listener?: (event: any | Event) => void
  observer?: ResizeObserver
}

// Image
export type ImageCoordinator = {
  x: number,
  y: number
}
