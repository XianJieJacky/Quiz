import { API_URL, API_KEY } from "./constants"

const url = new URL(API_URL)
export const fetchQuiz = (tag) => {
  url.searchParams.set('apiKey', API_KEY)
  url.searchParams.set('limit', 5)
  url.searchParams.set('tags', tag)
  return fetch(url)
    .then(response => {
      if (response.ok)
        return response.json()
    })
    .then(jsonResponse => {
      return jsonResponse
    })
    .catch(error => {
      console.error(error)
    })

}