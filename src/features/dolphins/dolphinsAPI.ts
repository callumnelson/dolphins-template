// types
import { Dolphin } from "../../types/dolphins"

const BASE_URL =
  "https://api.unsplash.com/photos/random?query=dolphin&count=30&client_id="

export async function fetchDolphins(): Promise<Dolphin[]> {
  const response = await fetch(BASE_URL + import.meta.env.VITE_PUBLIC_API_KEY)
  return (await response.json()) as Dolphin[]
}
