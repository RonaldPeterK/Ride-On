
import About from '../About/aboutComponent';
import NewsLetter from './FooterComponents/newsletter';
import ContactDetials from './FooterComponents/contactDetailes';
import CopyRights from './FooterComponents/copyRights';

function Footer() {
  return (
    <>
      <div className='container-fluid justify-content-center text-white mt-5 bg-dark p-5'>
        <div className="row gap-5 justify-content-center">
          <div className="col-lg-4 my-4"><About /></div>
          <div className="col-lg-3 my-4"><NewsLetter /></div>
          <div className="col-lg-3 my-4"><ContactDetials /></div>
        </div>
      </div>
      <CopyRights />
    </>
  );
}

export default Footer;