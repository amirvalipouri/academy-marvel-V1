import { useState } from 'react'

import { Container } from 'react-bootstrap'
import { Button, Fade } from 'react-bootstrap'
import miladiToShamsi from '../../../boot/moment/_miladiToShamsi'
import Star from '../../../assets/images/FreeTutorial/star.png'
import Cm from '../../../assets/images/FreeTutorial/cm.png'

import NewComment from './NewComment'
import ShowComments from './ShowComments'

const Conversation = () => {

  const fakeData = [
    {
      id: 0,
      text: "یرﻮﻀﺣ ترﻮﺻ ﻪﺑ ،هﺪﺷ ﻪﺋارا تﺎﻣﺪﺧ ﺎﯾ ﺎﻟﺎﮐ ﺖﺤﺻ زا ،ﻪﺟو ﺖﺧادﺮﭘ عﻮﻧ ﺮﻫ و ﻪﻠﻣﺎﻌﻣ مﺎﺠﻧا زا ﺶﯿﭘ ﺎﻔﻄﻟ.ﺪﯿﻨﮐ ﻪﻠﻣﺎﻌﻣ ﺮﺗ‌هدﻮﺳآ ،ﻦﻣا ﺪﯾﺮﺧ یﺎﻤﻨﻫار ی‌ﻪﻌﻟﺎﻄﻣ ﺎﺑ .ﺪﯿﯾﺎﻤﻧ ﻞﺻﺎﺣ نﺎﻨﯿﻤﻃا",
      date: new Date(),
      name: "هداز ﯽﯾﺎﻗآ ﯽﻠﻋ",
      src: "https://picsum.photos/id/237/200/300",
      like: 2,
      disLike: 0,
      comments: [
        {
          id : "vx",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 2,
          disLike: 0
        },
        {
          id : "fd",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 5,
          disLike: 0
        },
        {
          id : "asd",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 2,
          disLike: 6
        },
      ]
    },
    {
      id: 2,
      text: "یرﻮﻀﺣ ترﻮﺻ ﻪﺑ ،هﺪﺷ ﻪﺋارا تﺎﻣﺪﺧ ﺎﯾ ﺎﻟﺎﮐ ﺖﺤﺻ زا ،ﻪﺟو ﺖﺧادﺮﭘ عﻮﻧ ﺮﻫ و ﻪﻠﻣﺎﻌﻣ مﺎﺠﻧا زا ﺶﯿﭘ ﺎﻔﻄﻟ.ﺪﯿﻨﮐ ﻪﻠﻣﺎﻌﻣ ﺮﺗ‌هدﻮﺳآ ،ﻦﻣا ﺪﯾﺮﺧ یﺎﻤﻨﻫار ی‌ﻪﻌﻟﺎﻄﻣ ﺎﺑ .ﺪﯿﯾﺎﻤﻧ ﻞﺻﺎﺣ نﺎﻨﯿﻤﻃا",
      date: new Date(),
      name: "امیر ولی پوری",
      src: "https://picsum.photos/id/237/200/300",
      like: 2,
      disLike: 0,
      comments: [
        {
          id : "aa",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 2,
          disLike: 0
        },
        {
          id : "ss",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 5,
          disLike: 0
        },
        {
          id : "dd",
          text: "ﺑﻠﻪ اﮔﺮ ﺑﻪ ﮐﺘﺎب ﻫﺎی ﻋﻠﻤﯽ و ﺗﺨﯿﻠﯽ ﻋﻠﺎﻗﻪ دارﯾﺪ ﺑﺎﯾﺪ ﺣﺘﻤﺎ اﯾﻦ ﮐﺘﺎب را ﻣﻄﺎﻟﻌﻪ ﮐﻨﯿﺪ.",
          name: "مهسا احمدی",
          date: new Date(),
          like: 2,
          disLike: 6
        },
      ]
    }
  ]
  return (
    <div className="w-100">
      <div className="w-100 d-flex justify-content-between align-items-center mb-3">
        <p className="fs-16 fw-700 text-black">دیدگاه کاربران</p>
        <Button variant="primary">ثبت دیدگاه جدید</Button>
      </div>
      <hr />

      {fakeData.map((item, index) =>
        <div key={index} className="w-100 h-auto" >
          <div className="d-flex justify-content-between align-items-center p-2">
            <div className='d-flex'>
              <img className="rounded-circle" width="41" height="41" src={item.src} />
              <div className="mx-3">
                <p className='fs-14 fw-400 text-black'>{item.name}</p>
                <p className='fs-12 fw-400 my-1'>{miladiToShamsi(item.date)}</p>
              </div>
            </div>
            <div>
              {
                [1, 2, 3, 4, 5].map((item, index) =>
                  <img src={Star} alt='star' />
                )
              }
            </div>
          </div>
          <Container className="">
            <p className="fs-16 fw-400 text-black ">{item.text}</p>
            <NewComment item={item}  />
          </Container>
          {item.comments.length > 0 &&
            <ShowComments item={item.comments} id={item.id}/>
          }
          <hr />
        </div>

      )}
    </div>

  )
}

export default Conversation