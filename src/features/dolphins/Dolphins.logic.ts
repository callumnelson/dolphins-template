import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  getDolphinsAsync,
  incrementGallery,
  incrementHistory,
  selectCurrDolph,
  selectGallery,
  selectHistory,
  selectMessage,
} from "./dolphinsSlice"

export const useLogic = () => {
  const dispatch = useAppDispatch()
  const gallery = useAppSelector(selectGallery)
  const history = useAppSelector(selectHistory)
  const message = useAppSelector(selectMessage)
  const currDolph = useAppSelector(selectCurrDolph)

  const [timer, setTimer] = useState<number>(2000)
  const [rewind, setRewind] = useState<boolean>(false)

  useEffect(() => {
    let interval: NodeJS.Timer | null = null

    // Get dolphins if gallery is empty
    if (!gallery.length) dispatch(getDolphinsAsync())

    // Run timer
    if (timer && gallery.length) {
      interval = setInterval(() => {
        if (!rewind) {
          dispatch(incrementGallery())
        } else {
          dispatch(incrementHistory())
          if (!history.length) setTimer(0)
        }
      }, timer)
      // Pause
    } else {
      if (interval) clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timer, rewind, dispatch, gallery.length, history])

  const handlePlay = (): void => {
    setRewind(false)
    setTimer(2000)
  }

  const handlePause = (): void => {
    setTimer(0)
  }

  const handleRewind = (): void => {
    setRewind(true)
    setTimer(2000)
  }

  return {
    message,
    timer,
    rewind,
    currDolph,
    handlePlay,
    handlePause,
    handleRewind,
  }
}
