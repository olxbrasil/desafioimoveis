import { statesName } from './constants'

export default function formatStateList(data) {
  const newData = { ...data }
  Object.keys(newData).forEach((state) => {
    newData[state].text = statesName[state] || state
  })
  return newData
}
