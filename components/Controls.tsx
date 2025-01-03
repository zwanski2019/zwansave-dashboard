/*
Controls
for
Optimization
*/
'use client';

const Controls = () => {
  const handleReduceMemory = () => {
    alert('Memory optimization started!');
  };

  const handleReduceCPU = () => {
    alert('CPU optimization started!');
  };

  return (
    <div>
      <button onClick={handleReduceMemory} style={{ marginRight: '10px' }}>
        Optimize Memory
      </button>
      <button onClick={handleReduceCPU}>Optimize CPU</button>
    </div>
  );
};

export default Controls;
