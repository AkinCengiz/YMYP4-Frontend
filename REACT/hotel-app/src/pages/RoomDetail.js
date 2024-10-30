import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

export default class RoomDetail extends Component {
  
  
  render() {
    const selectedRoom = this.props.rooms.find(room => room.id === this.props.selectedRoom);
    if(!selectedRoom){
      return <p>Oda bulunamadı</p>
    }
    const typeRoom = this.props.roomTypes.find(
      (rt) => Number(rt.id) === Number(selectedRoom.roomType));
    return (
      <div>
              <Card className="my-2" key={selectedRoom.id}>
                <CardImg
                  alt="Room image"
                  src={typeRoom.features[0]?.imageUrl}
                  style={{
                    height: "100%",
                  }}
                />
                <CardBody>
                  <CardTitle tag="h5">
                    Oda Numarası : {selectedRoom.roomNumber}
                  </CardTitle>
                  <CardText>{typeRoom.name}</CardText>
                  <CardText>
                    <small className="text-muted">
                      Yatak Özelliği : {typeRoom.features[0]?.bedSize}
                    </small>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Oda Alanı : {selectedRoom.area} m<sup><small>2</small></sup>
                    </small>
                  </CardText>
                  <CardText>
                    <small className="text-muted">
                      Fiyatı : {typeRoom.features[0]?.price} $
                    </small>
                  </CardText>
                  <CardText>
                    Açıklama :  
                    {typeRoom.features[0]?.description}
                  </CardText>
                </CardBody>
              </Card>

      </div>
    );
  }
}
