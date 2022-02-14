import { useRef } from 'react'
import './champion-card.scss'

const ChampionCard = ({ item, id }) => {

  const cardRef = useRef(null)

  const onClick = () => {
    const img = cardRef.current.querySelector('img')
    const pos = img.getBoundingClientRect()
    const newNode = img.cloneNode(true)
    Object.assign(newNode.style, {
      width: pos.width + 'px',
      height: pos.height + 'px',
      top: pos.top + 'px',
      left: pos.left + 'px',
      position: 'absolute',
      zIndex: '102',
      transition: 'all .7s ease'
    })
    newNode.id = `champ-img-${id}`

    setTimeout(() => {
      Object.assign(newNode.style, {
        width: 'auto',
        height: '100%',
        top: 0,
        left: 0,
      })
    })
    document.body.appendChild(newNode)

    const videoUrl = `https://youtube.com/embed/${item.video}`
    document.querySelector(`#champ-detail-${id} iframe`).setAttribute('src', videoUrl)
    document.querySelector(`#champ-detail-${id}`).classList.add('active')

  }

  return (
    <div className="champion-card" onClick={onClick} ref={cardRef}>
      <div className="frame">
        <div
          className="bg-image overlay bg"
          style={{ backgroundImage: `url(${item.bg})` }}
        ></div>
      </div>
      <img src={item.img} alt="" />
      <div className="name">{item.name}</div>
    </div>
  )
}

export default ChampionCard