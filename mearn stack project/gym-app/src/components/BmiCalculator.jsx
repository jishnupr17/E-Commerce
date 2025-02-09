import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed
import 'react-toastify/dist/ReactToastify.css';

const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error('Please enter valid height, weight, and gender.');
      return;
    }

    const heightMeters = height / 100;
    const bmiValue = (weight / (heightMeters * heightMeters)).toFixed(2);

    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        'You are underweight. Consider seeking advice from a health provider.'
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(
        'You have a normal weight. Keep maintaining a healthy lifestyle!'
      );
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning('You are overweight. Consider a balanced diet and exercise.');
    } else {
      toast.error(
        'You are in the obese range. It is recommended to seek advice from a health specialist.'
      );
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBmI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI Chart" />
          {bmi && (
            <div>
              <h3>Your BMI: {bmi}</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
