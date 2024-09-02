
import Form from 'react-bootstrap/Form';
function TxtInput(props) {
  return (
    <>
        <Form.Label>{props.name}</Form.Label>
        <Form.Control type="text" placeholder="Enter a location" required />
        <Form.Control.Feedback type="invalid">
            Please provide valid address.
        </Form.Control.Feedback>
    </>
  )
}
export default TxtInput;