import React from 'react';

export default function MapCom() {
  return (
    <div className='container p-5 mt-3'>
      <div className='row'>
        <div className='col-lg-12' style={{height:'50vh'}}>
          <iframe
            title='We Are Here'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57348593182!2d-74.00599512526003!3d40.72586666928451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f988156a9%3A0xd54629bdf9d61d68!2sBroadway-Lafayette%20St!5e0!3m2!1spl!2spl!4v1624523797308!5m2!1spl!2spl'
            className='h-100 w-100'
            style={{ border: '0'}}
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </div>
  );
}