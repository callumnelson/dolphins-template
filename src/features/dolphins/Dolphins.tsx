// css
import styles from "./Dolphins.module.css"
// logic
import { useLogic } from "./Dolphins.logic"

const Dolphins = () => {
  const {
    message,
    timer,
    rewind,
    currDolph,
    handlePlay,
    handlePause,
    handleRewind,
  } = useLogic()

  return (
    <div className={styles.container}>
      <h1>Welcome to Dolfina!</h1>
      <div className={styles.dolphinWrapper}>
        {currDolph && (
          <img src={currDolph.urls.regular} alt={currDolph.alt_description} />
        )}
      </div>
      <p className={styles.message}>{message && message}</p>
      <div className={styles.buttonContainer}>
        <button
          className={!rewind && timer ? styles.selected : ""}
          onClick={handlePlay}
        >
          Play
        </button>
        <button className={!timer ? styles.selected : ""} onClick={handlePause}>
          Pause
        </button>
        <button
          className={rewind && timer ? styles.selected : ""}
          onClick={handleRewind}
        >
          Rewind
        </button>
      </div>
    </div>
  )
}

export default Dolphins
