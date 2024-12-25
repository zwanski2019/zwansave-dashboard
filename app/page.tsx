import MemoryUsageChart from '../components/MemoryUsageChart';
import CPUUsageChart from '../components/CPUUsageChart';
import Controls from '../components/Controls';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Zwansave Dashboard</h1>
      <div className="chart-container">
        <MemoryUsageChart />
      </div>
      <div className="chart-container">
        <CPUUsageChart />
      </div>
      <Controls />
    </div>
  );
}
