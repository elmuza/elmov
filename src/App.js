import './App.css';
import { Arrow } from './components/arrow/Arrow';
import { MyMap } from './components/map/Map';
import { Benefits } from './components/benefits/Benefit';
import {Services}  from './components/services/Services'
import {FixedMenu} from './components/fixedMenu/FixedMenu'


function App() {
  return (
    <>
      <div className="main-picture" id='ElMov'></div>
      
      <div className="container-fluid d-flex justify-content-between flex-column vh-100">
        <div className='row justify-content-between align-items-center'>
          <div className='col-sm-12 col-md-4 col-lg-2 text-sm-center'>
            <div className='logotype'>ElMov</div>
            {/* <button type="button" className="btn btn-outline-dark order text-nowrap float-right ">
              Заказать звонок
            </button> */}
          </div>

          <nav className='col-sm-12 col-md-8 col-lg-7'>
            <ul className="menu-main">
              <li><a href="#advantages">Преимущества</a></li>
              <li><a href="#service">Услуги</a></li>
              <li><a href="#prices">Цены</a></li>
              <li><a href="#contacts">Контакты</a></li>
            </ul>
          </nav>

          <div className='col-sm-12 col-md-12 col-lg-3 text-center'>
            <span className="tel">+7(905)589-97-27</span>

            {/* <button type="button" className="btn btn-outline-dark order">
              Заказать звонок
            </button> */}
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h1>Ремонт Электротранспорта</h1>
            <p className='present'>Мы предлагаем ремонт всех видов электротранспорта по
              самым доступным
              ценам в Москве и Московской области. Также предоставляются услуги по
              ремонту и изготовлению аккумуляторов для электросамокатов, моноколёс и
              сигвеев.
            </p>
          </div>
        </div>

        <div className='row'>   
          <Arrow hideLine link="#advantages" />
        </div> 
      </div>

      <FixedMenu />

      <div className="container-fluid" id='advantages'>
        <h2 className='text-center'>Наши преимущества</h2>  

        <Benefits />

        <h3 className='text-center'>РЕМОНТИРУЕМ ВСЕ ВИДЫ И МОДЕЛИ ЭЛЕКТРОТРАНСПОРТА</h3>

        <p className='question text-center'>Если у вас есть вопросы обращайтесь к нам в Skype, WatsApp или Viber или звоните по телефону +7(905)589-97-27</p>
    
        <Arrow link="#service" />
      </div>
      
      <Services />
    
      <div className="container-fluid" id='prices'>
       
        <h2 className='text-center'>Стоимость работ</h2>
      
        <div className='text-center final-price'>Окончательная цена зависит от сложности работ. Но никогда не меняется после того, как мы её назвали </div>
     
        <div className='text-center advert'>Мы делаем ремонт независимо от марки электротранспорта</div>
      
        <div className='text-center pricelist'>
          <div>Диагностика _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ бесплатно</div>
          <div>Ремонт аккумуляторов _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ от 500 руб. </div>
          <div>Гидроизоляция _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ от 1 000 руб. </div>
          <div>Техническое обслуживание _ _ _ _ _ _ _ _ _ _ _ _ _ _ от 500 руб. </div>
        </div>
     
        <div className='text-center advert'>Для расчета стоимости ремонта обратитесь в наш сервис по адресу г. Москва ул. Дубнинская д. 79 стр. 2. </div>
      
        <div className='question text-center'>Отправьте сообщение с описанием проблемы нам в Skype, WatsApp или Viber и мы обязательно  вам ответим или звоните по телефону +7(905)589-97-27 </div>
        
        <Arrow link="#contacts" />
      </div>

      <div className="container-fluid" id='contacts'>
        <h2 className='text-center'>Мы находимся по адресу:</h2>
       
        <div className='text-center'>
          <div className='contact'>г. Москва ул. Дубнинская д. 79 стр. 2. </div>
          <div className='contact'>Контактный телефон:  +7(905)589-97-27 </div>
          <div className='contact'>Электронный адрес:  electric.movement.ru@gmail.com</div>
        </div>

        <MyMap />
      </div>
        
      <footer className='card-footer'>
        <div className='row footer justify-content-center'>
          <div className='addres'>© Сервисный центр ElMov 2020</div>
          <div className='addres'>www.electric-movement.ru</div>
          <div className='addres'>тел. +7(905)589-97-27</div>
          <div  className='d-flex'>
            <img src='/img/skype.png' alt='skype' className='img-fluid messangers '/>
            <img src='/img/whatsapp.png' alt='viber' className='img-fluid messangers '/>
            <img src='/img/viber.png' alt='sviber' className='img-fluid messangers '/>
          </div>     
        </div>
      </footer>
     
    </>
  );
}

export default App;
