import './App.css';
import to from './img/to.png'

function App() {
  return (
    <div className="App">
      <div class="main-picture vw-100"></div>

      <div class="container-fluid d-flex justify-content-between flex-column vh-100">
        <div class='row justify-content-between align-items-center'>
          <div class='col-sm-12 col-md-4 col-lg-2 text-sm-center'>
            <div class='logotype'>ElMov</div>
            {/* <button type="button" class="btn btn-outline-dark order text-nowrap float-right ">
              Заказать звонок
            </button> */}
          </div>

          <nav class='col-sm-12 col-md-8 col-lg-7'>
            <ul class="menu-main">
              <li><a href="#services">Преимущества</a></li>
              <li><a href="#advantages">Услуги</a></li>
              <li><a href="#page">Цены</a></li>
              <li><a href="#page">Контакты</a></li>
            </ul>
          </nav>

          <div class='col-sm-12 col-md-6 col-lg-3 text-center'>
            <span class="tel">+7(925)895-56-65</span>

            <button type="button" class="btn btn-outline-dark order">
              Заказать звонок
            </button>
          </div>
        </div>

        <div class='row'>
          <div class='col'>
            <h1>Ремонт Электротранспорта</h1>
            <p class='present'>Мы предлагаем ремонт всех видов электротранспорта по
              самым доступным
              ценам в Москве и Московской области. Также предоставляются услуги по
              ремонту и изготовлению аккумуляторов для электросамокатов, моноколёс и
              сигвеев.
            </p>
          </div>
        </div>
            
        <div class='row'>
          <div class='col d-flex justify-content-center'>
            <a href='#advantages' class="arrow">
              <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <path d="M60.7048 27.1252L34.0124 50.1658L7.31992 27.1215C5.64657 25.6672 2.92861 25.6672 1.25526 27.1215C-0.418094 28.5757 -0.418094 30.93 1.25526 32.3805L30.9802 58.0394C32.5897 59.434 35.4312 59.4414 37.0491 58.0394L66.774 32.3768C68.4474 30.9262 68.4474 28.5683 66.774 27.1178C65.0961 25.6712 62.3781 25.6712 60.7048 27.1252Z" fill="#8B9395"/>
                <path d="M30.9799 32.0086C32.5894 33.4032 35.4309 33.4106 37.0489 32.0086L66.7738 6.34972C68.4471 4.89546 68.4471 2.54125 66.7738 1.0907C65.1004 -0.363565 62.3825 -0.363565 60.7091 1.0907L34.0125 24.1313L7.31968 1.0907C5.64633 -0.363565 2.92837 -0.363565 1.25501 1.0907C-0.418338 2.54496 -0.418338 4.89917 1.25501 6.34972L30.9799 32.0086Z" fill="#8B9395"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="container-fluid" id='advantages'>
        <h2 class='text-center'>Наши преимущества</h2>  

        <ul class='benefits'>
          <li id='expert'>Эксперты в ремонте электротранспорта</li>
          <li id='price'>Лучшие цены в городе</li>
          <li id='guaranty'>Пре доставляем гарантию качественного обслуживания</li>
          <li id='problem'>Устраните любую проблему и предлагаем сервисное обслуживание. Мы обслуживаем все основные бренды</li>
          <li id='accumulator'>Производим ремонт и замену аккумуляторов любой сложности</li>
          <li id='vip'>Скидки постоянным клиентам </li>
        </ul>

        <h3 class='text-center'>РЕМОНТИРУЕМ ВСЕ ВИДЫ И МОДЕЛИ ЭЛЕКТРОТРАНСПОРТА</h3>

        <p class='question text-center'>Если у вас есть вопросы обращайтесь к нам в Skype, WatsApp или Viber или звоните по телефону (925)895-56-65</p>
    
        <div class='d-flex justify-content-center'>
          <a href='#service' class="arrow ">
            <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path d="M60.7048 27.1252L34.0124 50.1658L7.31992 27.1215C5.64657 25.6672 2.92861 25.6672 1.25526 27.1215C-0.418094 28.5757 -0.418094 30.93 1.25526 32.3805L30.9802 58.0394C32.5897 59.434 35.4312 59.4414 37.0491 58.0394L66.774 32.3768C68.4474 30.9262 68.4474 28.5683 66.774 27.1178C65.0961 25.6712 62.3781 25.6712 60.7048 27.1252Z" fill="#8B9395"/>
              <path d="M30.9799 32.0086C32.5894 33.4032 35.4309 33.4106 37.0489 32.0086L66.7738 6.34972C68.4471 4.89546 68.4471 2.54125 66.7738 1.0907C65.1004 -0.363565 62.3825 -0.363565 60.7091 1.0907L34.0125 24.1313L7.31968 1.0907C5.64633 -0.363565 2.92837 -0.363565 1.25501 1.0907C-0.418338 2.54496 -0.418338 4.89917 1.25501 6.34972L30.9799 32.0086Z" fill="#8B9395"/>
            </svg>
          </a>
        </div>
      
        <div class='d-flex justify-content-center'>
            <div class='line'></div>
        </div>
      </div>

      <div class="container-fluid" id='service'>
        <h2 class='text-center'>Предоставляем следующие виды услуг</h2>
        
        <div class="d-flex justify-content-between flex-column ">
          <div class='row justify-content-center flex-nowrap'>
            <figure class='figure page3-figure'>
                <img src="/img/ring.png" alt="Замена колес" class='img-fluid  mx-auto d-flex align-items-start' />
              <figcaption class="figure-caption text-center text-wrap">Замена колес в электросамокатах, сигвеях, гироскутерах </figcaption>
            </figure>
          
            <figure class='figure page3-figure'> 
              <img src="/img/gidroizolation.png" alt="Гидроизоляция" class='figure-img img-fluid  mx-auto d-flex align-items-start' />
              <figcaption class="figure-caption text-center text-wrap">Гидроизоляция электросамокатов, сигвеев</figcaption>
            </figure>
        
            <figure class='figure page3-figure'>
              <img src="/img/accum.png" alt="аккумуляторы"  class='figure-img img-fluid mx-auto d-block' />
              <figcaption class="figure-caption text-center text-wrap">Изготовление и замена аккумуляторов</figcaption>
            </figure>
          </div>

          <div class='row justify-content-center flex-nowrap'>
            <figure class='figure page3-figure'>
              <img src="/img/scooters.png" alt="аккумуляторы" class='img-fluid  mx-auto d-flex align-items-start' />
              <figcaption class="figure-caption text-center text-wrap">Ремонт электросамокатов любой сложности</figcaption>
            </figure>

            <figure class='figure page3-figure'>
              <img src="/img/search.png" alt="аккумуляторы"  class='img-fluid  mx-auto d-flex align-items-start' />
              <figcaption class="figure-caption text-center text-wrap">Поиск и устранение неисправностей</figcaption>
            </figure>
            
            <figure class='figure page3-figure'>
              <img src={to} alt="аккумуляторы" class='img-fluid  mx-auto d-flex align-items-start' />
              <figcaption class="figure-caption text-center text-wrap">Техническое обслуживание самокатов, сигвеев, моноколес</figcaption>
            </figure>
          </div>
        </div>

        <div class="other">
          <h4>И многие другие виды ремонта электротранспорта!</h4> 
          <p class='question text-center'>Если  хотите узнать подробнее о наших услугах - пишите нам в Skype, WatsApp или Viber или звоните по телефону (925)895-56-65</p>
        </div>

        <div class='container-fluid d-flex justify-content-center'>
          <a href='#page' class="arrow ">
            <svg width="69" height="60" viewBox="0 0 69 60" fill="none" xmlns="http://www.w3.org/2000/svg" class='img-responsive'>
              <path d="M60.7048 27.1252L34.0124 50.1658L7.31992 27.1215C5.64657 25.6672 2.92861 25.6672 1.25526 27.1215C-0.418094 28.5757 -0.418094 30.93 1.25526 32.3805L30.9802 58.0394C32.5897 59.434 35.4312 59.4414 37.0491 58.0394L66.774 32.3768C68.4474 30.9262 68.4474 28.5683 66.774 27.1178C65.0961 25.6712 62.3781 25.6712 60.7048 27.1252Z" fill="#8B9395"/>
              <path d="M30.9799 32.0086C32.5894 33.4032 35.4309 33.4106 37.0489 32.0086L66.7738 6.34972C68.4471 4.89546 68.4471 2.54125 66.7738 1.0907C65.1004 -0.363565 62.3825 -0.363565 60.7091 1.0907L34.0125 24.1313L7.31968 1.0907C5.64633 -0.363565 2.92837 -0.363565 1.25501 1.0907C-0.418338 2.54496 -0.418338 4.89917 1.25501 6.34972L30.9799 32.0086Z" fill="#8B9395"/>
            </svg>
          </a>
        </div>
      
        <div class='container-fluid d-flex justify-content-center'>
          <div class='line'></div>
        </div>  
      </div>
    </div>
  );
}

export default App;
