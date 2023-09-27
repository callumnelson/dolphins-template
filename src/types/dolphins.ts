export interface Dolphin {
  alt_description: string
  blur_hash: string
  color: string
  created_at: string
  current_user_collections: []
  description: string | null
  downloads: number
  exif: any
  height: number
  id: string
  liked_by_user: boolean
  likes: number
  links: any
  location: any
  promoted_at: string | null
  slug: string
  sponsorship: string | null
  topic_submissions: any
  updated_at: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
    small_s3: string
  }
  user: any
  views: number
  width: number
}

export interface DolphinsState {
  gallery: Dolphin[]
  history: Dolphin[]
  currDolph: Dolphin | null
  status: "idle" | "loading" | "succeeded" | "failed"
  message: string | null
}
