const DessertsList = (props) => {
    const lowCaloriesDessert = props.data
      .filter((dessert) => {
        return dessert.calories < 500;
      })
      .sort((a, b) => {
        return a.calories - b.calories;
      })
      .map((dessert) => {
        return (
          <li>{dessert.name} - {dessert.calories} cal</li>
        );
      });
    return <ul>{lowCaloriesDessert}</ul>;
    }
  
  export default DessertsList;
  