import { Period } from '@/types/google'
import { DateTime } from 'luxon'

const convertToLuxonDateTime = (openingHours: Period[]) => {
  return openingHours.map(period => ({
    open: DateTime.fromObject({
      weekday: period.open.day,
      hour: period.open.hour,
      minute: period.open.minute,
    }),
    close: DateTime.fromObject({
      weekday: period.open.day,
      hour: period.close.hour,
      minute: period.close.minute,
    }),
  }))
}

export { convertToLuxonDateTime }
