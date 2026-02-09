export interface TupleBase {
  key: string | number
}
export type Tuple = TupleBase & Record<string, unknown>

export interface TableHeader {
  key: string
  title: string
  sortable?: boolean
  align?: 'start' | 'center' | 'end'
}
