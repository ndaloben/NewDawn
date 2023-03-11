import React from 'react'
import './nutrition.css'
import Proteins from '../../assets/images/proteins.jpeg'
import Grains from '../../assets/images/grains.jpeg'
import Fish from '../../assets/images/fish.jpeg'
import Greens from '../../assets/images/greens.jpeg'
import Virgin from '../../assets/images/virgin.jpeg'
import Workout from '../../assets/images/workout.jpeg'
import Water from '../../assets/images/water.jpeg'
import Plant from '../../assets/images/plant.jpeg'
import Fiber from '../../assets/images/fiber.jpeg'
import Fasting from '../../assets/images/fasting.jpeg'
import Fats from '../../assets/images/fats.jpeg'
import Nuts from '../../assets/images/nuts.jpeg'


import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'


const Nutrition = () => {
  return (
    <div className='nutrition'>
      <div>
      <span className='text-n'>Nutrition Tips</span>
      </div>
      {/* <div> */}
      <div className="swiper-slide">
        <Swiper 
        effect={ 'coverflow' }
        grabCursor={ true }
        centeredSlides={ true }
        loop={ true }
        slidesPerView={ 'auto' }
        coverflowEffect={
          {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{el: '.swiper-pagination', clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prev:'.swiper-button-prev',
            clickable: true,

          }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper-container'
        >
          <SwiperSlide>
        <div className='protein'>
        <div className="title">Include proteins with every meal</div>
        <img className="image" src={Proteins} alt="" />
        <span className="review">Including some protein with every meal can help balance blood sugar.Some studiesTrusted Source suggest higher protein diets can be beneficial for type 2 diabetes.Other researchTrusted Source indicates balancing blood sugar can support weight management and cardiovascular health.</span>
        </div>
        </SwiperSlide>  
        <SwiperSlide>
        <div className='grains'>
        <div className="title">Eat Whole Grains</div>
        <img className="image" src={Grains} alt="" />
        <span className="review">The American Heart Association (AHA)Trusted Source recommend people eat whole grains rather than refined grains. Whole grains contain nutrients such as B vitamins, iron, and fiber. These nutrients are essential for body functions that include carrying oxygen in the blood, regulating the immune system, and balancing blood sugar.</span>
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className='fish'>
        <div className="title">Eat oily fish</div>
        <img className="image" src={Fish} alt="" />
        <span className="review">According to researchTrusted Source, omega-3 fatty acids in oily fish are essential for cell signaling, gene expression, and brain and eye development. Some studiesTrusted Source indicate that omega-3 fatty acids can reduce the risk of cardiovascular disease. Other researchTrusted Source suggests the anti-inflammatory properties of omega-3 may effectively manage the early stages of degenerative diseases such as Alzheimer’s disease and Parkinson’s disease.</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='greens'>
        <div className="title">Eat your Greens</div>
        <img className="image" src={Greens} alt="" />
        <span className="review">Dark green leafy vegetables are a great source of nutrition, according to the Department of Agriculture (USDA). Leafy greens are rich in vitamins, minerals, and antioxidants. The USDA suggest that folate in leafy greens may help protect against cancer, while vitamin K helps prevent osteoporosis.</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='fats'>
        <div className="title">Include healthy fats</div>
        <img className="image" src={Fats} alt="" />
        <span className="review">People should limit their intake of saturated fats while avoiding trans fats, according to the USDA. A person can replace these fats with unsaturated fats, which they can find in foods such as avocado, oily fish, and vegetable oils.</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='virgin'>
        <div className="title">Use extra virgin olive oil</div>
        <img className="image" src={Virgin} alt="" />
        <span className="review">As part of the Mediterranean diet, extra virgin olive oil has benefits to the heart, blood pressure, and weight, according to a 2018 health reportTrusted Source. A person can include extra virgin olive oil in their diet by adding it to salads or vegetables or cooking food at low temperatures.</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='nuts'>
        <div className="title">Eat nuts</div>
        <img className="image" src={Nuts} alt="" />
        <span className="review">According to the AHATrusted Source, eating one serving of nuts daily in place of red or processed meat, french fries, or dessert may benefit health and prevent long-term weight gain. The AHA suggest that Brazil nuts, in particular, may help someone feel fuller and stabilize their blood sugar.</span>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='fiber'>
        <div className="title">Get enough fiber</div>
        <img className="image" src={Fiber} alt="" />
        <span className="review">According to the AHATrusted Source, fiber can help improve blood cholesterol levels and lower the risk of heart disease, obesity, and type 2 diabetes. People can get enough fiber in their diet by eating whole grains, vegetables, beans, and pulses.</span>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='water'>
        <div className="title">Drink water</div>
        <img className="image" src={Water} alt="" />
        <span className="review">Drinking enough water every day is good for overall health and can help manage body weight, according to the Centers for Disease Control and Prevention (CDC)Trusted Source. Drinking water can prevent dehydration, which can be a particular risk for older adultsTrusted Source. If someone does not like plain water, they can add some citrus slices and mint leaves to increase the appeal, or drink herbal teas.</span>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='plant'>
        <div className="title">Increase plant foods</div>
        <img className="image" src={Plant} alt="" />
        <span className="review">ResearchTrusted Source suggests that plant-based diets may help prevent overweight and obesity. Doctors associate obesity with many diseases. According to some studies, including more plant foods in the diet could reduceTrusted Source the risk of developing diseases such as diabetes and cardiovascular disease.</span>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='fasting'>
        <div className="title">Give your body a rest by fasting</div>
        <img className="image" src={Fasting} alt="" />
        <span className="review">Intermittent fasting involves not eating either overnight or some days of the week. This may reduce energy intake and can have health benefits. According to a 2020 reviewTrusted Source, intermittent fasting may improve blood pressure, cholesterol levels, and heart health.</span>
        </div></SwiperSlide>
        <SwiperSlide>
        <div className='workout'>
        <div className="title">Work out every now and then</div>
        <img className="image" src={Workout} alt="" />
        <span className="review">Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities.</span>
        </div></SwiperSlide>
           
            <div className="slider-controller">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
        </Swiper>
        </div>
      </div>

// </div>
    
  )
}

export default Nutrition

