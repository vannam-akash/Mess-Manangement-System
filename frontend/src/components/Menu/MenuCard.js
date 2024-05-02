import React from 'react';
import './MenuCard.css';

const Menu = () => {
  // Sample data for menus
  const menus = {
    Monday: {
      breakfast: 'Omelette and toast',
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
    },
  };

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Weekly Menu</h1>
      <table className="menu-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(menus).map(day => (
            <tr key={day}>
              <td>{day}</td>
              <td>{menus[day].breakfast}</td>
              <td>{menus[day].lunch}</td>
              <td>{menus[day].dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
