'use client';
import TotalEmissions from "@/components/TotalEmissions"
import EnergyConsump from "@/components/EnergyConsump"
import TotalElectrical from "@/components/TotalElectrical"




export default function StadiumLeft() {
  return <div>
        <TotalEmissions></TotalEmissions>
        <EnergyConsump></EnergyConsump>
        <TotalElectrical></TotalElectrical>
  </div>;
}
