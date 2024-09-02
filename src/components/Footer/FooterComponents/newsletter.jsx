
import { Button, Tooltip } from 'antd';
import "./../../Button/button.css"
import SpanLine from '../../Span/spanLine';

function NewsLetter() {
  return (
    <>
        <h4>NEWS LETTER</h4>
        <SpanLine/>
        <p className="my-4">Subscribe to our newsletter for news, updates, exclusive discounts and offers.</p>
        <input type="text" className='form-control rounded-0 p-2' />
        <Tooltip>
        <Button type='submit' shape="round" className='btn p-4 fs-5 d-inline-flex align-items-center mt-4' size="large">
            <span>Subscribe</span>
        </Button>
      </Tooltip>
    </>
  )
}
export default NewsLetter