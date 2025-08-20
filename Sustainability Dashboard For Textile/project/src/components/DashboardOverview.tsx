import React from 'react';
import { MetricCard } from './MetricCard';
import { ChartContainer } from './ChartContainer';
import { TrendingUp, TrendingDown, Zap, Leaf, Trash, Droplets, AlertTriangle, CheckCircle } from 'lucide-react';

export function DashboardOverview() {
  const mainMetrics = [
    {
      title: 'Energy Consumption',
      value: '2,847 kWh',
      change: -12.5,
      trend: 'down',
      icon: Zap,
      color: 'blue'
    },
    {
      title: 'Carbon Footprint',
      value: '1.2 tons CO₂',
      change: -8.3,
      trend: 'down',
      icon: Leaf,
      color: 'green'
    },
    {
      title: 'Waste Generated',
      value: '145 kg',
      change: -15.2,
      trend: 'down',
      icon: Trash,
      color: 'orange'
    },
    {
      title: 'Water Usage',
      value: '3,420 L',
      change: -6.7,
      trend: 'down',
      icon: Droplets,
      color: 'teal'
    }
  ];

  const goals = [
    { title: 'Reduce Energy by 20%', progress: 65, status: 'on-track' },
    { title: 'Carbon Neutral by 2025', progress: 42, status: 'at-risk' },
    { title: '90% Waste Recycling', progress: 78, status: 'on-track' },
    { title: 'Cut Water Use by 15%', progress: 55, status: 'on-track' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sustainability Overview</h2>
        <div className="text-sm text-gray-600">
          Updated: {new Date().toLocaleString()}
        </div>
      </div>

      {/* Main Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainMetrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartContainer 
          title="Monthly Energy Consumption"
          type="line"
          data={[
            { label: 'Jan', value: 3200 },
            { label: 'Feb', value: 3100 },
            { label: 'Mar', value: 2950 },
            { label: 'Apr', value: 2800 },
            { label: 'May', value: 2700 },
            { label: 'Jun', value: 2847 }
          ]}
          color="blue"
        />
        
        <ChartContainer 
          title="Carbon Footprint Breakdown"
          type="doughnut"
          data={[
            { label: 'Energy', value: 45 },
            { label: 'Transportation', value: 25 },
            { label: 'Waste', value: 15 },
            { label: 'Water', value: 15 }
          ]}
          color="green"
        />
      </div>

      {/* Goals Progress */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sustainability Goals Progress</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{goal.title}</h4>
                {goal.status === 'on-track' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <AlertTriangle className="h-5 w-5 text-orange-500" />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      goal.status === 'on-track' ? 'bg-green-500' : 'bg-orange-500'
                    }`}
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">{goal.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <TrendingDown className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-700">Energy consumption decreased by 12.5% this month</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-700">Waste recycling goal achieved - 90% recycling rate</span>
          </div>
          <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
            <AlertTriangle className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-gray-700">Carbon footprint reduction behind target - action needed</span>
          </div>
        </div>
      </div>
    </div>
  );
}