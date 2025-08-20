import React, { useState } from 'react';
import { MetricCard } from './MetricCard';
import { ChartContainer } from './ChartContainer';
import { Zap, Home, Building, Factory, TrendingDown } from 'lucide-react';

export function EnergyTracking() {
  const [timeRange, setTimeRange] = useState('monthly');

  const energyMetrics = [
    {
      title: 'Total Consumption',
      value: '2,847 kWh',
      change: -12.5,
      trend: 'down' as const,
      icon: Zap,
      color: 'blue' as const
    },
    {
      title: 'Renewable Energy',
      value: '1,423 kWh',
      change: 18.3,
      trend: 'up' as const,
      icon: Leaf,
      color: 'green' as const
    },
    {
      title: 'Energy Efficiency',
      value: '92.3%',
      change: 4.1,
      trend: 'up' as const,
      icon: TrendingDown,
      color: 'teal' as const
    },
    {
      title: 'Cost Savings',
      value: '$342',
      change: 15.7,
      trend: 'up' as const,
      icon: Building,
      color: 'orange' as const
    }
  ];

  const consumptionData = {
    monthly: [
      { label: 'Jan', value: 3200 },
      { label: 'Feb', value: 3100 },
      { label: 'Mar', value: 2950 },
      { label: 'Apr', value: 2800 },
      { label: 'May', value: 2700 },
      { label: 'Jun', value: 2847 }
    ],
    weekly: [
      { label: 'Week 1', value: 720 },
      { label: 'Week 2', value: 680 },
      { label: 'Week 3', value: 710 },
      { label: 'Week 4', value: 737 }
    ]
  };

  const sourceData = [
    { label: 'Solar', value: 40 },
    { label: 'Grid (Renewable)', value: 35 },
    { label: 'Grid (Traditional)', value: 25 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Energy Tracking</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeRange('weekly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === 'weekly'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeRange('monthly')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              timeRange === 'monthly'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Energy Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {energyMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title={`${timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} Energy Consumption`}
          type="line"
          data={consumptionData[timeRange as keyof typeof consumptionData]}
          color="blue"
        />
        
        <ChartContainer 
          title="Energy Source Distribution"
          type="doughnut"
          data={sourceData}
          color="green"
        />
      </div>

      {/* Energy Breakdown by Category */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Energy Consumption by Category</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">Office Lighting</div>
                <div className="text-sm text-gray-600">1,138 kWh</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">40%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Building className="h-5 w-5 text-green-600" />
              <div>
                <div className="font-medium text-gray-900">HVAC Systems</div>
                <div className="text-sm text-gray-600">853 kWh</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">30%</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <Factory className="h-5 w-5 text-orange-600" />
              <div>
                <div className="font-medium text-gray-900">Equipment</div>
                <div className="text-sm text-gray-600">856 kWh</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-gray-900">30%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}