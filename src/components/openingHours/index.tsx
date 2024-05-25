import { Data } from '@/types/google'
import { convertToLuxonDateTime } from '@/utils'
import { placesFields } from '@/utils/google'
import axios, { Axios, AxiosResponse } from 'axios'
import { DateTime } from 'luxon'
import { env } from 'process'
import neveleHours from './data/nevele.json'
import deinzeHours from './data/deinze.json'
import React from 'react'
import { H2, H3 } from '../typography'

interface OpeningHourProps {}

type Place = 'nevele' | 'deinze'

const googlePlaces = axios.create({
  baseURL: 'https://places.googleapis.com/v1/places',
  params: {
    key: env.MAPS_API_KEY,
    languageCode: 'nl',
  },
})

const isDev = process.env.NODE_ENV === 'development'

const fetchPlaceDetails = async (placeId: string): Promise<Data> => {
  const fields = [placesFields.id, placesFields.displayName, placesFields.regularOpeningHours]

  if (isDev) {
    return new Promise<Data>((resolve, reject) => {
      const localOpeningHours = placeId === 'ChIJox_acAVsw0cRZxcmJHijT8c' ? neveleHours : deinzeHours
      resolve(localOpeningHours as Data)
    })
  }

  const { data } = await googlePlaces.get<Data>(`/${placeId}`, { params: { fields: fields.join(',') } })
  return data
}

const getOpeningHours = async (): Promise<
  Record<
    Place,
    {
      open: DateTime<true> | DateTime<false>
      close: DateTime<true> | DateTime<false>
    }[]
  >
> => {
  const placeIds = [
    {
      id: 'ChIJox_acAVsw0cRZxcmJHijT8c',
      place: 'Nevele',
    },
    {
      id: 'ChIJCb5bxxNrw0cRIuj0fR7oyTU',
      place: 'Deinze',
    },
  ]
  const promises = placeIds.map(({ id }) => fetchPlaceDetails(id))
  const responses = await Promise.all(promises)

  const nevele = responses.find(data => data.id === placeIds[0].id)!
  const deinze = responses.find(data => data.id === placeIds[1].id)!

  const neveleOpeningHours = convertToLuxonDateTime(nevele.regularOpeningHours.periods)
  const deinzeOpeningHours = convertToLuxonDateTime(deinze.regularOpeningHours.periods)

  return { nevele: neveleOpeningHours, deinze: deinzeOpeningHours }
}

export const OpeningHours = async ({}: OpeningHourProps) => {
  const openingHours = await getOpeningHours()
  return (
    <section className="flex flex-col items-center justify-center gap-y-5">
      {Object.keys(openingHours).map(place => {
        return (
          <div key={place}>
            <H3 className="mb-3 text-center capitalize">{place}</H3>
            <ul>
              {openingHours[place as Place].map(({ open, close }) => {
                const day = open.weekday
                const key = `${day}-${open.toFormat('HH:mm')}-${close.toFormat('HH:mm')}`
                return (
                  <li key={key} className="grid grid-cols-2">
                    <span className="capitalize">{open.setLocale('NL-be').weekdayShort}</span>
                    <span>
                      {open.toFormat('HH:mm')} - {close.toFormat('HH:mm')}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </section>
  )
}
