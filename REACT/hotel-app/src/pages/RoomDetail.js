import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"

export default class RoomDetail extends Component {
  render() {
    return (
        <Card className="my-2">
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/180"
          style={{
            height: 180
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            Card Title
          </CardTitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    )
  }
}
