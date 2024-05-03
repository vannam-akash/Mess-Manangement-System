import React from 'react';
import './MenuCard.css';


const menus = [
  {
  messName: "North-Indian Mess",
  menus:{
  Monday: {
    breakfast: 'Puri and sabji',
    lunch: 'Dal- Kaali urad, Sukhi sabji- bhindi, Gravy sabji- mushroom, Special- Pani Puri',
    dinner: 'Dal- Dal makhani, Sukhi sabji- bhindi, Gravy sabji- Rajma, Special- Gulab Jamun',
  },
  Tuesday: {
    breakfast: 'Poha and Jalebi',
    lunch: 'Dal- Mung dal, Sukhi sabji- Chana, Gravy sabji- Kadi, Special- Papad',
    dinner: 'Dal- Masoor dal, Sukhi sabji- Patta gobi, Gravy sabji- Chhole, Special- Fruits',
  },
  Wednesday: {
    breakfast: 'Sambhar Vada',
    lunch: 'Dal- Dal makhni, Sukhi sabji- Karela, Gravy sabji- Soyabean, Special- Custard',
    dinner: 'Dal- Kaali urad, Sukhi sabji- gobi, Gravy sabji- Paneer, Special- Watermelon',
  },
  Thursday: {
    breakfast: 'Bread Pakoda',
    lunch: 'Dal- Kaali urad, Sukhi sabji- aalo gobi, Gravy sabji- Rajma, Special- Fruit Rayata',
    dinner: 'Dal- Urad dal, Sukhi sabji- Mixed Veg, Gravy sabji- Soyabean, Special- Rasgulla',
  },
  Friday: {
    breakfast: 'Sandwich',
    lunch: 'Dal- Arhar Dal, Sukhi sabji- gobi, Gravy sabji- Rajma, Special- Fruits',
    dinner: 'Dal- Moong Dal, Sukhi sabji- aalo fry, Gravy sabji- Paneer, Special- Halwa',
  },
  Saturday: {
    breakfast: 'Halwa and Chane',
    lunch: 'Dal- Dal tadka, Sukhi sabji- Mix veg, Gravy sabji- Shani Paneer, Special- Dahi Vada, Sweet- Gulab jamun/ Ras malai',
    dinner: 'OFF',
  },
  Sunday: {
    breakfast: 'Aloo Paratha',
    lunch: 'Dal- Hara chana, Sukhi sabji- Patta gobi, Gravy sabji- Chhole, Special- Sewai',
    dinner: 'Dal- Dal Tadka, Sukhi sabji- Pyaz fry, Gravy sabji- Paneer, Special- Mixed Fruit Salad',
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
    dinner: 'Dal- Mix dal, Sukhi sabji- fried aloo, Special- Chhole Bhature, Sweet- Barfi',
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
    lunch: 'Dal- Hara chana, Sukhi sabji- Patta gobi, Gravy sabji- Chhole, Special- Kheer',
    dinner: 'Dal- Arhar dal, Sukhi sabji- Beans, Gravy sabji- Rajma, Special- Aloo tikki/ Chaat',
  },}
},
  {
  messName: "South-Indian Mess",
  menus:{
  Monday: {
    breakfast: 'Masala Dosa',
    lunch: 'Dal- Dal Fry, Sukhi sabji- Beans, Gravy sabji- Garlic Rasam, Special- Mixed Veg Raita',
    dinner: 'Dal- Arhar dal, Sukhi sabji- Patta Gobi, Gravy sabji- Kofta, Special- Aloo tikki/ Chaat',
  },
  Tuesday: {
    breakfast: 'Idli Sambhar',
    lunch: 'Dal- Arhar dal, Sukhi sabji- Palak Pappu, Gravy sabji- Lemon Rasam, Special- Papad',
    dinner: 'Dal- Tool dal, Sukhi sabji- Bhindi, Gravy sabji- Veg Kurma, Special- Biryani',
  },
  Wednesday: {
    breakfast: 'Sambhar Vada',
    lunch: 'Dal- Moong Dal, Sukhi sabji- Aloo kara poriyal, Gravy sabji- Rajma, Special- Kheer',
    dinner: 'Dal- Arhar dal, Sukhi sabji- Beans, Gravy sabji- Kadi, Special- Uttapam',
  },
  Thursday: {
    breakfast: 'Onion Uthappam and Sambhar',
    lunch: 'Dal- Dal Tadka, Sukhi sabji- Bhindi, Gravy sabji- Veg Kurma, Special- Gajar Halwa',
    dinner: 'Dal- Toor dal, Sukhi sabji- Soyabean, Gravy sabji- Rajma, Special- Vada Pav',
  },
  Friday: {
    breakfast: 'Brown Bread and Omlet',
    lunch: 'Dal- Arhar dal, Sukhi sabji- Aloo gobi, Gravy sabji- Rasam, Special- Fruit Salad',
    dinner: 'Dal- Hara Chana, Sukhi sabji- Aloo Fry, Gravy sabji- Paneer Butter Masala, Special- Pav Bhaji',
  },
  Saturday: {
    breakfast: 'Boiled moong sprouts and pongal vada',
    lunch: 'Dal- Moong Dal, Sukhi sabji- Pyaz Fry, Gravy sabji- Rajma, Special- Potato Chips',
    dinner: 'OFF',
  },
  Sunday: {
    breakfast: 'Aloo masala and puri',
    lunch: 'Dal- Dal Tadka, Sukhi sabji- Veg Poriyal, Gravy sabji- Rajma, Special- Gulab Jamun',
    dinner: 'Dal- Arhar dal, Sukhi sabji- Aloo, Gravy sabji- Mixed Veg Curry, Special- Aloo tikki/ Chaat',
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