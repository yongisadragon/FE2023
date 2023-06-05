const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const slideLength = 3; // 이미지 슬라이드 개수
  const imgWidth = 100; // 이미지 너비 (vw 단위)

  const nextSlide = () => {
    if (currentSlide >= slideLength) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
    console.log(currentSlide);
  };

  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(slideLength);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
    console.log(currentSlide);
  };
  return (
    <div className='slideContainer'>
      <ul className='slide' style={{ transform: `translateX(-${imgWidth * (currentSlide - 1)}vw)` }}>
        <li>
          <img src='https://via.placeholder.com/800x200.png?text=1' alt='' />
        </li>
        <li>
          <img src='https://via.placeholder.com/800x200.png?text=2' alt='' />
        </li>
        <li>
          <img src='https://via.placeholder.com/800x200.png?text=3' alt='' />
        </li>
      </ul>
      <div className='btnContainer'>
        <a href='#' className='btnPrev' onClick={prevSlide}>
          이전
        </a>
        <a href='#' className='btnNext' onClick={nextSlide}>
          다음
        </a>
      </div>
    </div>
  );
};

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Slider />);
}

App();
