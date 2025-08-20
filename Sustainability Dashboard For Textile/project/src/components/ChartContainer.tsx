import React from 'react';

interface ChartData {
  label: string;
  value: number;
}

interface ChartContainerProps {
  title: string;
  type: 'line' | 'bar' | 'doughnut';
  data: ChartData[];
  color: 'blue' | 'green' | 'orange' | 'teal';
}

export function ChartContainer({ title, type, data, color }: ChartContainerProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    orange: 'bg-orange-500',
    teal: 'bg-teal-500'
  };

  const maxValue = Math.max(...data.map(d => d.value));

  const renderLineChart = () => (
    <div className="h-64 flex items-end justify-between space-x-2">
      {data.map((point, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div className="relative w-full h-48 flex items-end">
            <div 
              className={`w-full ${colorClasses[color]} rounded-t transition-all duration-500 hover:opacity-80`}
              style={{ height: `${(point.value / maxValue) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-600 mt-2">{point.label}</span>
        </div>
      ))}
    </div>
  );

  const renderDoughnutChart = () => (
    <div className="flex items-center justify-center h-64">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {data.map((segment, index) => {
            const total = data.reduce((sum, d) => sum + d.value, 0);
            const percentage = (segment.value / total) * 100;
            const circumference = 2 * Math.PI * 30;
            const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -index * (circumference / data.length);
            
            return (
              <circle
                key={index}
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke={`hsl(${120 + index * 60}, 60%, 50%)`}
                strokeWidth="8"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500"
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">100%</div>
            <div className="text-xs text-gray-600">Total</div>
          </div>
        </div>
      </div>
      <div className="ml-8 space-y-2">
        {data.map((segment, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: `hsl(${120 + index * 60}, 60%, 50%)` }}
            />
            <span className="text-sm text-gray-700">{segment.label}: {segment.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {type === 'line' || type === 'bar' ? renderLineChart() : renderDoughnutChart()}
    </div>
  );
}