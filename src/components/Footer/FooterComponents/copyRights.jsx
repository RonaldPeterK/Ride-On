import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CopyRights() {
  return (
    <div className="container-fluid bg-dark text-white text-center p-4 border-top border-1 border-secondary">
        <Container>
        <Row>
            <Col>© 2024 Brassyacademy. All Rights Reserved</Col>
        </Row>
        </Container>
    </div>
  );
}

export default CopyRights;