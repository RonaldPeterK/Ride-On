import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./form.css"
import DistanceFormUi from './FormTab/distanceForm';
import HourlyFormUi from './FormTab/hourlyForm';
import FlatForm from './FormTab/flatForm';
function FormTabs() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className='m-0'>
        <Col lg={2} className='tabs bg-dark border-1 border-end border-secondary'>
          <Nav variant="pills" className="flex-column bg-dark">
            <Nav.Item>
              <Nav.Link eventKey="first">Distance</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Hourly</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Flat rate</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col lg={10} className='bg-dark text-white px-5 p-2'>
          <Tab.Content>
            <Tab.Pane eventKey="first"> <DistanceFormUi/></Tab.Pane>
            <Tab.Pane eventKey="second"><HourlyFormUi/></Tab.Pane>
            <Tab.Pane eventKey="third"><FlatForm/></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default FormTabs;