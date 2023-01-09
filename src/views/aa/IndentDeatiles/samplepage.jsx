import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


import Card from '../../../components/Card/MainCard'

const IndentDetailes = () => {

  const {id}=useParams();
  
  return (
    <React.Fragment>
      <Row>
        <Col>
          <Card title="Indent Details" isOption>
            <p>
             Indent id is -{id}
            </p>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default IndentDetailes;
