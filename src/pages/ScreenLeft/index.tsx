'use client';
import Information from "@/components/Information"
import AssetMaintenance from "@/components/AssetMaintenance"
import AirQualityIndex from "@/components/AirQualityIndex"


export default function Home() {
  return <div>
        <Information></Information>
        <AssetMaintenance></AssetMaintenance>
        <AirQualityIndex></AirQualityIndex>
  </div>;
}
