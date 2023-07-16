import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS } from 'chart.js/auto';
import "./goals.css";

const data = {
  labels: ["Carbohydrates", "Fat", "Protein"],
  datasets: [ 
    { 
      label: "amount",
      data: [50, 30, 20],
      backgroundColor: ['#086788', '#f0c808', '#dd1c1a'],
      hoverBackgroundColor: ['#086788', '#f0c808', '#dd1c1a'],
    }
  ]
};

const data2 = {
  labels: ["Breakfast", "Lunch", "Dinner", "Snack"],
  datasets: [ 
    { 
      label: "calories",
      data: [25, 40, 20, 15],
      backgroundColor: ['#086788', '#f0c808', '#dd1c1a', '#07a0c3'],
      hoverBackgroundColor: ['#086788', '#f0c808', '#dd1c1a', '#07a0c3'],
    }
  ]
};

const data3 = {
  labels: ["Calories Burned", "Workouts / minutes", " Exercise Calories"],
  datasets: [ 
    { 
      label: "calories",
      data: [50, 30, 20],
      backgroundColor: ['#086788', '#f0c808', '#dd1c1a', '#07a0c3'],
      hoverBackgroundColor: ['#086788', '#f0c808', '#dd1c1a', '#07a0c3'],
    }
  ]
};

const data4 = {
  labels: ["Saturated Fat", "Polyunsaturated Fat", " Trans Fat", "Cholesterol", "Sodium", "Potassium", "Fiber", "Sugar"],
  datasets: [ 
    { 
      label: "amount",
      data: [5, 10, 4, 0.6, 2.3, 3.5, 38, 0.83],
      backgroundColor: ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#3a6ea5', '#004e98'],
      hoverBackgroundColor: ['#f94144', '#f3722c', '#f8961e', '#f9c74f', '#90be6d', '#43aa8b', '#3a6ea5', '#004e98'],
    }
  ]
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'left',
    },
  },
};

export const Goals = () => {

  return (
    <div className="goals">
      <div className="image">
      <h1 className="title">Fitness Goals</h1>
      </div>


    <div className="content">
      <div className="pie-chart">
        <div className="chart">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="tables">
        <div>
        <div className="table">
        <div className="row">
          <p className="header">Daily Nutrition Goals</p>
          <button>Edit</button>
        </div>
        <div className="row">
          <p>Carbohydrates</p>
          <p>50%</p>
        </div>
        <div className="row">
          <p>Fat</p>
          <p>30%</p>
        </div>
        <div className="row">
          <p>Protein</p>
          <p>20%</p>
        </div>
        <div className="row">
          <p>Total Calories</p>
          <p>2200</p>
        </div>
        <div className="row">
          <p>Custom Daily Goals</p>
          <p>
            <a href="/premium">
              <i style={{ color: "#f7941e" }} className="fas fa-lock"></i>
            </a>
            No
          </p>
        </div>
      </div>
      </div>
      </div>
    </div>

    <div className="content">
      <div className="pie-chart">
        <div className="chart">
          <Pie data={data2} options={options} />
        </div>
      </div>
      <div className="tables">
        <div>
        <div className="table">
        <div className="row">
          <p className="header"> Calories by Meal</p>
          <button>Edit</button>
        </div>
        <div className="row">
          <p>Breakfast</p>
          <p>25%</p>
        </div>
        <div className="row">
          <p>Lunch</p>
          <p>40%</p>
        </div>
        <div className="row">
          <p>Dinner</p>
          <p>20%</p>
        </div>
        <div className="row">
          <p>Snack</p>
          <p>15%</p>
        </div>
      </div>
      </div>
      </div>
    </div>


    <div className="content">
      <div className="pie-chart">
        <div className="chart">
          <Pie data={data3} options={options} />
        </div>
      </div>
      <div className="tables">
        <div>
        <div className="table">
        <div className="row">
          <p className="header"> Fitness / Week</p>
          <button>Edit</button>
        </div>
        <div className="row">
          <p>Calories Burned </p>
          <p>50%</p>
        </div>
        <div className="row">
          <p>Workouts / minutes</p>
          <p>30%</p>
        </div>
        <div className="row">
          <p> Exercise Calories </p>
          <p>20%</p>
        </div>
      </div>
      </div>
      </div>
    </div>


    <div className="content">
      <div className="pie-chart">
        <div className="chart">
          <Bar data={data4} options={options} />
        </div>
      </div>
      <div className="tables">
        <div>
        <div className="table">
        <div className="row">
          <p className="header"> Micronutrients </p>
          <button>Edit</button>
        </div>
        <div className="row">
          <p> Saturated Fat </p>
          <p>5 g </p>
        </div>
        <div className="row">
          <p>Polyunsaturated Fat</p>
          <p>10 g</p>
        </div>
        <div className="row">
          <p> Trans Fat </p>
          <p>4 g</p>
        </div>
        <div className="row">
          <p> Cholesterol </p>
          <p>600 mg</p>
        </div>
        <div className="row">
          <p> Sodium </p>
          <p>2300 mg</p>
        </div>
        <div className="row">
          <p> Potassium </p>
          <p>3500 mg</p>
        </div>
        <div className="row">
          <p> Fiber </p>
          <p>38 g</p>
        </div>
        <div className="row">
          <p> Sugar </p>
          <p>83 mg</p>
        </div>
      </div>
      </div>
      </div>
    </div>
    </div>
  );
};
