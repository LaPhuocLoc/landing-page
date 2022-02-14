import './champion-detail.scss'
import { useRef, useEffect } from 'react'
import { closeIcon } from '../../../assets/images'
const ChampionDetail = ({ item, id, active }) => {
  const iframeRef = useRef(null)

  useEffect(() => {
    const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
    iframeRef.current.setAttribute('height', height)
  }, [])

  const handleClose = () => {
    document.querySelector(`#champ-detail-${id}`).classList.remove('active')
    iframeRef.current.setAttribute('src', '')

    const img = document.querySelector(`#champ-img-${id}`)
    img.style.opacity = 0
    setTimeout(() => {
      img.remove()
    }, 500)
  }

  return (
    <div
      id={`champ-detail-${id}`}
      className={`champion-detail bg-image overlay`}
      style={{ backgroundImage: `url(${item.bgLarge})` }}
    >
      <div className="champion-detail__content">
        <span>{item.nickName}</span>
        <h2 className="name main-color">{item.name}</h2>
        <div>Role: <span className="second-color">{item.role}</span></div>
        <div>Difficulty: <span className="second-color">{item.difficulty}</span></div>
        <div className="story">
          {item.description}
        </div>
        <span>Champion spotlight</span>
        <div className="video">
          <iframe src="" frameBorder="0"
            title="champion spotlight"
            ref={iframeRef}
          ></iframe>
        </div>
      </div>
      <div className="champion-detail__close" onClick={handleClose}>
        <img src={closeIcon} alt="" />
      </div>
    </div>
  )
}

export default ChampionDetail