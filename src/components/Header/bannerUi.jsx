
import './banner.css';
import SpanLine from '../Span/spanLine';
import Btn from '../Button/button';
function Banner() {
  return (
    <>
    <div className="banner p-5 container-fluid d-flex text-center align-items-center justify-content-center">
        <div className="col-lg-5 text-white">
            <p className='display-2 fw-normal'>Reliable Drivers</p>
            <SpanLine />
            <p className='text-white fs-5 mt-4'>Expect only the best from our wide array of professionally trained drivers they will get you there on time!</p>
            <Btn 
                name="About Us"
                title="To Know About Us"
                link = '/about'
            />
        </div>
    </div>
    </>
  );
}

export default Banner;