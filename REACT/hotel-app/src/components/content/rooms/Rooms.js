import React, { Component } from "react";

export default class Rooms extends Component {
  render() {
    return (
      <div class="w3-row-padding w3-padding-16">
        {this.props.rooms
          .filter((r) => Number(r.roomType) === Number(1))
          .slice(0, 1)
          .map((room) => {
            
            let typeRoom = this.props.roomTypes.find(
              (x) =>Number(x.id) === Number(room.roomType)
            );
            return (
              <div class="w3-third w3-margin-bottom">
                <img
                  src={typeRoom.features[0]?.imageUrl}
                  alt="Norway"
                  style={{ width: "100%" }}
                />
                <div class="w3-container w3-white">
                  <h3>{typeRoom.name}</h3>
                  <h6 class="w3-opacity">
                    From ${typeRoom.features[0]?.price}
                  </h6>
                  <p>{typeRoom.features[0]?.bedSize}</p>
                  <p>
                    {room.area}m<sup>2</sup>
                  </p>
                  <p class="w3-large">
                    <i class="fa fa-bath"></i> <i class="fa fa-phone"></i>{" "}
                    <i class="fa fa-wifi"></i>
                  </p>
                  <button class="w3-button w3-block w3-black w3-margin-bottom">
                    Choose Room
                  </button>
                </div>
              </div>
            );
          })}
        {this.props.rooms
          .filter((r) => Number(r.roomType) === Number(2))
          .splice(0, 1)
          .map((room) => {
            let typeRoom = this.props.roomTypes.find(
              (x) => Number(x.id) === Number(room.roomType)
            );
            return (
              <div class="w3-third w3-margin-bottom">
                <img
                  src={typeRoom.features[0]?.imageUrl}
                  alt="Norway"
                  style={{ width: "100%" }}
                />
                <div class="w3-container w3-white">
                  <h3>{typeRoom.name}</h3>
                  <h6 class="w3-opacity">
                    From ${typeRoom.features[0]?.price}
                  </h6>
                  <p>{typeRoom.features[0]?.bedSize}</p>
                  <p>
                    {room.area}m<sup>2</sup>
                  </p>
                  <p class="w3-large">
                    <i class="fa fa-bath"></i> <i class="fa fa-phone"></i>{" "}
                    <i class="fa fa-wifi"></i>
                  </p>
                  <button class="w3-button w3-block w3-black w3-margin-bottom">
                    Choose Room
                  </button>
                </div>
              </div>
            );
          })}
        {this.props.rooms
          .filter((r) => Number(r.roomType) === Number(3))
          .splice(0, 1)
          .map((room) => {
            let typeRoom = this.props.roomTypes.find(
              (x) => Number(x.id) === Number(room.roomType)
            );
            return (
              <div class="w3-third w3-margin-bottom">
                <img
                  src={typeRoom.features[0]?.imageUrl}
                  alt="Norway"
                  style={{ width: "100%" }}
                />
                <div class="w3-container w3-white">
                  <h3>{typeRoom.name}</h3>
                  <h6 class="w3-opacity">
                    From ${typeRoom.features[0]?.price}
                  </h6>
                  <p>{typeRoom.features[0]?.bedSize}</p>
                  <p>
                    {room.area}m<sup>2</sup>
                  </p>
                  <p class="w3-large">
                    <i class="fa fa-bath"></i> <i class="fa fa-phone"></i>{" "}
                    <i class="fa fa-wifi"></i>
                  </p>
                  <button class="w3-button w3-block w3-black w3-margin-bottom">
                    Choose Room
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
