import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((el) => el.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          max={totalMaximum}
          label={el.label}
        />
      ))}
    </div>
  );
}
