import React, { useState } from 'react';
import { Header } from './components/Header';
import { DashboardOverview } from './components/DashboardOverview';
import { EnergyTracking } from './components/EnergyTracking';
import { CarbonFootprint } from './components/CarbonFootprint';
import { WasteManagement } from './components/WasteManagement';
import { WaterUsage } from './components/WaterUsage';
import { GoalsTargets } from './components/GoalsTargets';
import { DataInput } from './components/DataInput';
import { Reports } from './components/Reports';

type TabType = 'overview' | 'energy' | 'carbon' | 'waste' | 'water' | 'goals' | 'input' | 'reports';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      case 'energy':
        return <EnergyTracking />;
      case 'carbon':
        return <CarbonFootprint />;
      case 'waste':
        return <WasteManagement />;
      case 'water':
        return <WaterUsage />;
      case 'goals':
        return <GoalsTargets />;
      case 'input':
        return <DataInput />;
      case 'reports':
        return <Reports />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-6">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default App;