import HomeSection from "../HomeSection"
import './champion.scss'
import { bg2 } from "../../../assets/images"
import { championsData } from "../../../assets/dummy"

import { Swiper, SwiperSlide } from 'swiper/react'
import ChampionCard from "./ChampionCard"

const Champion = props => {
  return (
    <HomeSection
      className={`champion ${props.isActive ? 'active' : ''}`}
      contentClassName={`overlay`}
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champion-list">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {
              championsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ChampionCard
                    item={item} id={index}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>

    </HomeSection>
  )
}

export default Champion