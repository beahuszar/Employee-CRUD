export const Sex = {
  FEMALE: 0,
  MALE: 1,
  UNKNOWN: 2,
} as const

export type Sex = (typeof Sex)[keyof typeof Sex]

export const Education = {
  ELEMENTARY: 0,
  VOCATIONAL_SCHOOL: 1,
  APPRENTICESHIP_SCHOOL: 2,
  VOCATIONAL_SECONDARY_SCHOOL: 3,
  HIGH_SCHOOL: 4,
  COLLEGE: 5,
  UNIVERSITY: 6,
  OTHER: 7,
} as const

export type Education = (typeof Education)[keyof typeof Education]

export const PaymentMethod = {
  TRANSFER: 0,
  CASH: 1,
  DISPATCH: 2,
} as const

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

export interface Employee {
  id: number
  email: string | null
  firstName: string | null
  lastName: string | null
  dateOfBirth: string | null
  placeOfBirth: string | null
  mothersFirstName: string | null
  mothersLastName: string | null
  country: string | null
  zipCode: string | null
  parcelNumber: string | null
  city: string | null
  administrativeArea: string | null
  administrativeAreaType: string | null
  houseNumber: string | null
  building: string | null
  staircase: string | null
  floor: string | null
  door: string | null
  phone: string | null
  sex: Sex
  education: Education
  paymentMethod: PaymentMethod
  bankAccountNumber: string | null
  moneyDispatchAddress: string | null
  cashPaymentDay: number | null
  salary: number | null
}

export interface EmployeeListParams {
  search?: string
  orderBy?: string
  limit?: number
  offset?: number
}

export interface EmployeeListResponse {
  data: Employee[]
  total: number
}
