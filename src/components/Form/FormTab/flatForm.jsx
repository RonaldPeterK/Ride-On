
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import TxtInput from '../FormInputUi/textInput';
import SelectBasicExample from '../FormInputUi/selectInput';

function FlatForm() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className='mt-4 px-3 justify-content-between'>
        <Form.Group as={Col} lg="3" className='mt-3'  controlId="validationCustom04">
          <TxtInput
            name="Pick Up Address"
          />
        </Form.Group>

        <Form.Group as={Col} lg="3" className='mt-3'  controlId="validationCustom04">
          <TxtInput
            name="Drop Off Address"
          />
        </Form.Group>

        <Form.Group as={Col} lg="3" className='mt-3' controlId="validationCustom03">
          <Form.Label>Flate Rate</Form.Label>
          <SelectBasicExample
            one = "50% Off for 3 Days"
            two = "25% Off for 2 Days"
          />
        </Form.Group>

        <Form.Group as={Col} lg="2" className='my-4' controlId="validationCustom04">
            <Button type="submit" className='btn rounded-5 py-2 px-3 border-0 align-items-center mt-4'>Reserve Now <i className="ms-2 fa-solid fa-chevron-right"></i></Button>
        </Form.Group>

      </Row>
    </Form>
    
  );
}

export default FlatForm;