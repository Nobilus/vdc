import type { WeekdayNumbers } from 'luxon'

interface OpeningHours {
  openNow: boolean
  periods: Period[]
  weekdayDescriptions: string[]
}

interface Period {
  open: Time
  close: Time
}

interface Time {
  day: WeekdayNumbers
  hour: number
  minute: number
}

interface DisplayName {
  text: string
  languageCode: string
}

interface Data {
  id: string
  displayName: DisplayName
  regularOpeningHours: OpeningHours
}

export type { Data, DisplayName, OpeningHours, Period, Time }
