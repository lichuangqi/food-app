import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
const AvailableMeals: React.FC = () => {
  const [meals, setMeals] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [httpError, setHttpError] = useState<any>();
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-app-14944-default-rtdb.firebaseio.com/meals.json');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const responseData = await response.json();
      const loadedMeals: any = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, [])
  if (isLoading) {
    return <section className={classes.MealsLoading}><p>Loading ...</p></section>
  }
  if (httpError) {
    return <section className={classes.MealsError}><p>{httpError}</p></section>
  }
  const mealList = meals.map(meal => <MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealList}
        </ul>
      </Card>
    </section>
  )
}

export default AvailableMeals;