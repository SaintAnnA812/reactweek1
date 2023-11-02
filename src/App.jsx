
import './App.css'
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 8],
  ["Eat", 2],
  ["Commute", 2],
  ["Sport", 2],
  ["Sleep", 8],
];

export const options = {
  title: "My Daily Activities",
};

function App() {

  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"200%"}
        height={"400px"}
      />
    </>
  )
}

export default App
