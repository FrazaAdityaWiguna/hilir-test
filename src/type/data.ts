import type { ReactNode } from "react";

type KPIType = "CTR" | "CPC" | "CPA" | "CPM";

type Location = {
  country: string;
  city: string;
};

type Audience = {
  ageRange: string;
  gender: string;
  interests: string[];
};

export type PerformanceEntry = {
  date: string;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
};

export type AdType = {
  id: number;
  clientName: string;
  kpiType: KPIType;
  targetKPI: number;
  actualValue: number;
  date: string;
  campaignName: string;
  budget: number;
  spend: number;
  impressions: number;
  clicks: number;
  conversions: number;
  conversionRate: number;
  ctr: number;
  cpc: number;
  cpm: number;
  cpa: number;
  platform: string;
  status: string;
  location: Location;
  audience: Audience;
  performance: PerformanceEntry[];
}

export type AdsResponseType = {
  ads: AdType[];
}

export type MenuItem = {
  id: number;
  name: string;
  icon: ReactNode;
  url: string;
}