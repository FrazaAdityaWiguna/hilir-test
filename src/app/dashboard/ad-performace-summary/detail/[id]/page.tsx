import React, { type FC } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import CustomBreadcrumbs, {
  type BreadcrumbsType,
} from "@/components/breadcrumbs/CustomBreadcrumbs";
import { decryptURL } from "@/utils";
import { AdType } from "@/type/data";
import AdCard from "./AdCard";
import { toast } from "react-toastify";

const listBreadcrumb: BreadcrumbsType[] = [
  {
    title: "Ad Performance Summary",
    url: "/dashboard",
  },
  {
    title: "Detail",
  },
];

type Params = {
  id: string;
};

interface AdPerformanceSummaryDetailPageProps {
  params: Promise<Params>;
}

async function getAdsById(id: string) {
  const res = await fetch(`http://localhost:8000/ads/${id}`);
  if (!res.ok) {
    toast.error("Failed to fetch ads");
    throw new Error("Failed to fetch ads");
  }
  return res.json();
}

const AdPerformanceSummaryDetailPage: FC<
  AdPerformanceSummaryDetailPageProps
> = async ({ params }) => {
  const { id } = await params;
  const data: AdType = await getAdsById(decryptURL(id));

  return (
    <MainLayout>
      <CustomBreadcrumbs
        title="Ad Performance Summary Detail"
        urlBack="/dashboard"
        listBreadcrumb={listBreadcrumb}
      />

      <AdCard {...data} />
    </MainLayout>
  );
};

export default AdPerformanceSummaryDetailPage;
