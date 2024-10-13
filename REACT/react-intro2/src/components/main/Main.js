import React from "react";
import { Row, Col } from "reactstrap"

const Main = (props) => {
  return (
    <div className="Main" style={props.mainProp.mainCss}>
      <Row>
        <Col xs="3">
        <div >
          <ul style={props.mainProp.mainList}>
            <li>Bilgisayar</li>
            <li>Cep Telefonu</li>
            <li>Televizyon</li>
          </ul>
        </div>
        </Col>
        <Col xs="6">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col xs="3">
          <h3>YMYP-4</h3>
        </Col>
      </Row>
      
        {/* <p>{props.mainProp.mainTitle}</p>
       
        <p>{props.mainProp.mainText}</p>
        
          <p>{props.mainProp.mainDeneme}</p> */}
      
      
      
      
    </div>
  );
};

export default Main;
