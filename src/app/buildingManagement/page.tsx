'use client';
import UE4 from '@/pages/UE4/index';
import BuildingLeft from "@/pages/BuildingLeft/index"
import BuildingRight from "@/pages/BuildingRight/index"

export default function buildingManagement() {
  return (
    <main className="flex items-start justify-between ml-[4.5rem] mr-[5.75rem]">
      <UE4></UE4>
      <BuildingLeft></BuildingLeft>
      <BuildingRight></BuildingRight>
    </main>
  );
}
