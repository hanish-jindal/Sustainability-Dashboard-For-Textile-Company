import React, { useState } from 'react';
import { Target, CheckCircle, AlertTriangle, Clock, Plus } from 'lucide-react';

export function GoalsTargets() {
  const [showAddModal, setShowAddModal] = useState(false);

  const goals = [
    {
      id: 1,
      title: 'Reduce Energy Consumption by 20%',
      category: 'Energy',
      target: 20,
      current: 12.5,
      deadline: '2024-12-31',
      status: 'on-track',
      description: 'Implement energy efficiency measures across all facilities'
    },
    {
      id: 2,
      title: 'Achieve Carbon Neutrality',
      category: 'Carbon',
      target: 100,
      current: 42,
      deadline: '2025-12-31',
      status: 'at-risk',
      description: 'Offset all carbon emissions through renewable energy and carbon credits'
    },
    {
      id: 3,
      title: '90% Waste Recycling Rate',
      category: 'Waste',
      target: 90,
      current: 78,
      deadline: '2024-06-30',
      status: 'on-track',
      description: 'Improve waste sorting and recycling processes'
    },
    {
      id: 4,
      title: 'Cut Water Usage by 15%',
      category: 'Water',
      target: 15,
      current: 6.7,
      deadline: '2024-09-30',
      status: 'on-track',
      description: 'Install water-efficient fixtures and implement conservation measures'
    },
    {
      id: 5,
      title: '100% Renewable Energy',
      category: 'Energy',
      target: 100,
      current: 65,
      deadline: '2025-06-30',
      status: 'on-track',
      description: 'Transition to 100% renewable energy sources'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'on-track':
        return 'text-blue-600 bg-blue-100';
      case 'at-risk':
        return 'text-orange-600 bg-orange-100';
      case 'overdue':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'on-track':
        return <Target className="h-5 w-5" />;
      case 'at-risk':
        return <AlertTriangle className="h-5 w-5" />;
      case 'overdue':
        return <Clock className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Sustainability Goals & Targets</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Goal</span>
        </button>
      </div>

      {/* Goals Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-green-600 mb-1">3</div>
          <div className="text-sm text-gray-600">On Track</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-orange-600 mb-1">1</div>
          <div className="text-sm text-gray-600">At Risk</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-blue-600 mb-1">5</div>
          <div className="text-sm text-gray-600">Total Goals</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="text-3xl font-bold text-gray-900 mb-1">67%</div>
          <div className="text-sm text-gray-600">Avg Progress</div>
        </div>
      </div>

      {/* Goals List */}
      <div className="space-y-4">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
          
          return (
            <div key={goal.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(goal.status)}
                        <span className="capitalize">{goal.status.replace('-', ' ')}</span>
                      </div>
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{goal.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Category: {goal.category}</span>
                    <span>Deadline: {new Date(goal.deadline).toLocaleDateString()}</span>
                    <span>{daysLeft > 0 ? `${daysLeft} days left` : 'Overdue'}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-medium text-gray-900">
                    {goal.current}{goal.category === 'Carbon' ? '% reduction' : goal.category === 'Waste' ? '% recycling' : '% reduction'} / {goal.target}% target
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
                      goal.status === 'on-track' ? 'bg-green-500' :
                      goal.status === 'at-risk' ? 'bg-orange-500' :
                      goal.status === 'completed' ? 'bg-blue-500' :
                      'bg-red-500'
                    }`}
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
                <div className="text-right text-sm text-gray-600">
                  {progress.toFixed(1)}% complete
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Goal Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Add New Goal</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Goal Title</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Energy</option>
                  <option>Carbon</option>
                  <option>Waste</option>
                  <option>Water</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target (%)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deadline</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  Add Goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}