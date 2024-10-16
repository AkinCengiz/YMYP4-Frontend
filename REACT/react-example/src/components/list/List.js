import React, { Component } from "react";

export default class List extends Component {
  cities = [
    "İstanbul",
    "İzmir",
    "Ankara",
    "Sakarya",
    "Eskişehir",
    "Sivas",
    "Erzurum",
    "Gaziantep",
    "Antalya",
    "Hatay",
  ];
  categories = [
    {
      id: 2,
      description: "Sweet and savory sauces relishes spreads and seasonings",
      name: "Condiments",
    },
    {
      id: 1,
      description: "Soft drinks coffees teas beers and ales",
      name: "Beverages",
    },
    {
      id: 3,
      description: "Desserts candies and sweet breads",
      name: "Confections",
    },
    {
      id: 4,
      description: "Cheeses",
      name: "Dairy Products",
    },
    {
      id: 5,
      description: "Breads crackers pasta and cereal",
      name: "Grains/Cereals",
    },
    {
      id: 6,
      description: "Prepared meats",
      name: "Meat/Poultry",
    },
    {
      id: 7,
      description: "Dried fruit and bean curd",
      name: "Produce",
    },
    {
      id: 8,
      description: "Seaweed and fish",
      name: "Seafood",
    },
  ];
  numbers = [-1, 5, -8, 7, 0, -3, 2, -7, -9];
  users = [
    {
      id: 1,
      name: "Akın",
      lastname: "Cengiz",
      city: "İstanbul",
      gender: "Male",
    },
    {
      id: 2,
      name: "Abdullah",
      lastname: "Aksu",
      city: "İzmir",
      gender: "Male",
    },
    {
      id: 3,
      name: "Hidayet Alperen",
      lastname: "Özyürek",
      city: "Ankara",
      gender: "Male",
    },
    {
      id: 4,
      name: "Ahmet Miran",
      lastname: "Irmak",
      city: "Sakarya",
      gender: "Male",
    },
    {
      id: 5,
      name: "Fırat",
      lastname: "Kılıç",
      city: "Eskişehir",
      gender: "Male",
    },
    {
      id: 6,
      name: "Menderes",
      lastname: "Duman",
      city: "Antalya",
      gender: "Male",
    },
    {
      id: 7,
      name: "Mihriban",
      lastname: "Şimşek",
      city: "Kocaeli",
      gender: "Female",
    },
    {
      id: 8,
      name: "Mustafa",
      lastname: "Tuğrul",
      city: "Erzurum",
      gender: "Male",
    },
    {
      id: 9,
      name: "Recep",
      lastname: "Altun",
      city: "Trabzon",
      gender: "Male",
    },
    {
      id: 10,
      name: "Tuğba",
      lastname: "Tuna",
      city: "Çanakkale",
      gender: "Female",
    },
  ];
  note = 1.5;
  pElement = () => {
    if (this.note > 2.5) {
      return <p>Notunuz : {this.note} - Geçtiniz...</p>;
    }
    return <p>Notunuz : {this.note} - Kaldınız...</p>;
  };
  noteElement =
    this.note > 2.5 ? (
      <p style={{ backgroundColor: "green", color: "white" }}>
        {this.note} - Geçtiniz...
      </p>
    ) : (
      <p style={{ backgroundColor: "red", color: "white" }}>
        {this.note} - Kaldınız...
      </p>
    );
    state = {
      selectedCategory : ""
    }
    

  render() {
    return (
      <div>
        <h1>Şehirler</h1>
        <ul>
          {this.cities.map((city, index) => {
            return (
              <li id={"city" + index} key={index}>
                {city}
              </li>
            );
          })}
        </ul>
        <h1>Kategoriler</h1>
        <p>{this.state.selectedCategory}</p>
        <ul>
          {this.categories.map((category) => {
            return (
              <li onClick={()=> this.setState({selectedCategory : category.description})} id={"category-" + category.id} key={category.id}>
                {category.name}
              </li>
            );
          })}
        </ul>
        <h1>Çift Kategoriler</h1>
        <ul>
          {this.categories.map((category) => {
            if (category.id % 2 === 0) {
              return (
                <li
                  style={{ backgroundColor: "red", color: "white" }}
                  key={category.id}
                >
                  {category.name}
                </li>
              );
            }
            return (
              <li
                style={{ backgroundColor: "black", color: "white" }}
                key={category.id}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
        <div>
          {this.numbers.map((number, index) => {
            if (number > 0) {
              return <p key={index}>{number} sayısı pozitif bir sayıdır...</p>;
            } else if (number < 0) {
              return <p key={index}>{number} sayısı negatif bir sayıdır...</p>;
            } else {
              return <p key={index}>{number} sayısı notr bir sayıdır...</p>;
            }
          })}
        </div>
        <div>
          {this.users.map((user) => {
            if (user.gender === "Female") {
              return (
                <p
                  style={{ backgroundColor: "pink", color: "white" }}
                  key={user.id}
                >
                  FirstName : {user.name} - LastName : {user.lastname} - City :{" "}
                  {user.city}
                </p>
              );
            }
            return (
              <p
                style={{ backgroundColor: "blue", color: "white" }}
                key={user.id}
              >
                FirstName : {user.name} - LastName : {user.lastname} - City :{" "}
                {user.city}
              </p>
            );
          })}
        </div>
        <div>
          {
            <div>
              {this.pElement()}
              {this.noteElement}
              <p>{this.note}</p>
            </div>
          }
        </div>
      </div>
    );
  }
}
