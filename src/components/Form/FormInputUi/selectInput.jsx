import Form from 'react-bootstrap/Form';

function SelectBasicExample(props) {
  return (
    <Form.Select aria-label="Default select example" required>
      <option value="1">{props.one}</option>
      <option value="2">{props.two}</option>
    </Form.Select>
  );
}

export default SelectBasicExample;