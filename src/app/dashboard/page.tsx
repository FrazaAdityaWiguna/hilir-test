import React, { type FC } from "react";

import { AdType } from "@/type/data";
import { Box } from "@mui/material";
import MainLayout from "@/components/layouts/MainLayout";
import TableAds from "./TableAds";
import CustomBreadcrumbs from "@/components/breadcrumbs/CustomBreadcrumbs";
import { toast } from "react-toastify";

async function getAds() {
  const res = await fetch("http://localhost:8000/ads");
  if (!res.ok) {
    toast.error("Failed to fetch ads");
    throw new Error("Failed to fetch ads");
  }
  return res.json();
}

const DashboardPage: FC = async () => {
  const data: AdType[] = await getAds();

  return (
    <MainLayout>
      <CustomBreadcrumbs title="Ad Performance Summary" />

      <Box sx={{ mt: 3 }}>
        <TableAds data={data} />
      </Box>
    </MainLayout>
  );
};

export default DashboardPage;
