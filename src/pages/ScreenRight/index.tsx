'use client';
import AlarmManagement from "@/components/AlarmManagement"
import WorkOrderManagement from "@/components/WorkOrderManagement"
import EnergyConsumption from "@/components/EnergyConsumption"



export default function ScreenRight() {
  return <div>
    <AlarmManagement></AlarmManagement>
    <WorkOrderManagement></WorkOrderManagement>
    <EnergyConsumption></EnergyConsumption>
  </div>;
}
