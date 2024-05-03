import React from 'react';
import './MenuCard.css';


const menus = [
  {
  messName: "North-Indian Mess",
  menus:{
  Monday: {
    breakfast: 'Puri and potato curry',
    lunch: 'Roti, Rice, Dal, vegetabel curry, Salad ',
    dinner: 'Roti, Rice, Dal, Kidney-beans curry, Salad ',
  },
  Tuesday: {
    breakfast: 'Poha and Jalebi',
    lunch: 'Roti, Rice, Dal, Dahi kadhi, Salad ',
    dinner: 'Chole Bhature',
  },
  Wednesday: {
    breakfast: 'Yogurt with fruits',
    lunch: 'Quinoa salad',
    dinner: 'Tacos with guacamole',
  },
  Thursday: {
    breakfast: 'Waffles with berries',
    lunch: 'Shrimp pasta',
    dinner: 'Roast chicken with vegetables',
  },
  Friday: {
    breakfast: 'French toast',
    lunch: 'Sushi rolls',
    dinner: 'Vegetable curry with rice',
  },
  Saturday: {
    breakfast: 'Bagels with cream cheese',
    lunch: 'BBQ ribs',
    dinner: 'Pizza with toppings',
  },
  Sunday: {
    breakfast: 'English muffins',
    lunch: 'Caesar salad',
    dinner: 'Steak with mashed potatoes',
  },}
},
  {
  messName: "Satvik Mess",
  menus:{
  Monday: {
    breakfast: 'Smabhar vada / Kachori',
    lunch: 'Dal- Kaali urad, Sukhi sabji- aalo gobi, Gravy sabji- Rajma, Special- Fruits',
    dinner: 'Dal- Mix, Sukhi sabji- Kundru, Special- Bati chokha / Corn palak, Sweets- Sewaiyaan',
  },
  Tuesday: {
    breakfast: 'Poha and jalebi',
    lunch: 'Dal- Arhar dal, Sukhi sabji- gajar ki sabji, Gravy sabji- Kala chana, Special- Bhel',
    dinner: 'Dal- Chana dal, Sukhi sabji- loki, Gravy sabji- Palak/Matar paneer, Special- Tomato Soup',
  },
  Wednesday: {
    breakfast: 'Paratha and sabji',
    lunch: 'Dal- Mung dal, Sukhi sabji- Beans, Gravy sabji- Kadi, Special- Papad',
    dinner: 'Dal- Dal fry, Sukhi sabji- Soyabean, Gravy sabji- Kofta, Special- Kesar doodh',
  },
  Thursday: {
    breakfast: 'Dosa / Cheela',
    lunch: 'Dal- Arhar dal, Sukhi sabji- Mix veg, Gravy sabji- Rajma, Special- Fruit reyta / dahi',
    dinner: 'Dal- Mix dal, Sukhi sabji- fried aloo, Special- Chole Bhature, Sweet- Barfi',
  },
  Friday: {
    breakfast: 'Bread Pakoda and Daliya',
    lunch: 'Dal- Dal makhni, Sukhi sabji- Karela, Gravy sabji- Soyabean, Special- Dahi',
    dinner: 'Gravy sabji- Aloo matar, Special- Idli sambhar & chutney, Sweet- Kheer',
  },
  Saturday: {
    breakfast: 'Halwa and chane',
    lunch: 'Dal- Dal tadka, Sukhi sabji- Mix veg, Gravy sabji- Shani Paneer, Special- Pulao & dahi, Sweet- Gulab jamun/ Ras malai',
    dinner: 'OFF',
  },
  Sunday: {
    breakfast: 'Aloo Paratha',
    lunch: 'Dal- Hara chana, Sukhi sabji- Patta gobi, Gravy sabji- Chole, Special- Kheer',
    dinner: 'Dal- Arhar dal, Sukhi sabji- Beans, Gravy sabji- Rajma, Special- Aloo tikki/ Chaat',
  },}
},
  {
  messName: "South-Indian Mess",
  menus:{
  Monday: {
    breakfast: 'Masala Dosa',
    lunch: 'Chicken salad',
    dinner: 'Spaghetti and meatballs',
  },
  Tuesday: {
    breakfast: 'Pancakes with syrup',
    lunch: 'Vegetable stir-fry',
    dinner: 'Grilled salmon with rice',
  },
  Wednesday: {
    breakfast: 'Yogurt with fruits',
    lunch: 'Quinoa salad',
    dinner: 'Tacos with guacamole',
  },
  Thursday: {
    breakfast: 'Waffles with berries',
    lunch: 'Shrimp pasta',
    dinner: 'Roast chicken with vegetables',
  },
  Friday: {
    breakfast: 'French toast',
    lunch: 'Sushi rolls',
    dinner: 'Vegetable curry with rice',
  },
  Saturday: {
    breakfast: 'Bagels with cream cheese',
    lunch: 'BBQ ribs',
    dinner: 'Pizza with toppings',
  },
  Sunday: {
    breakfast: 'English muffins',
    lunch: 'Caesar salad',
    dinner: 'Steak with mashed potatoes',
  },}
}
];


const Menu = () => {
  // console.log(menus);
  const index =[0,1,2];
  return (
    <div className="menu-container">
      <h1 className="menu-heading">Weekly Mess Menu</h1>

      {index.map((idx) => 

      <table className="menu-table">
        <thead>
          <tr>
            <th colSpan="4" className="mess-name">
              {menus[idx].messName}
            </th>
          </tr>
          <tr>
            <th>Day</th>
            <th className="equal-width">Breakfast</th>
            <th className="equal-width">Lunch</th>
            <th className="equal-width">Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(menus[0].menus).map((day) => (
            <tr key={day}>
              <td>{day}</td>
              <td className="equal-width">{menus[idx].menus[day].breakfast}</td>
              <td className="equal-width">{menus[idx].menus[day].lunch}</td>
              <td className="equal-width">{menus[idx].menus[day].dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
  )}
    </div>
  );
};

export default Menu;