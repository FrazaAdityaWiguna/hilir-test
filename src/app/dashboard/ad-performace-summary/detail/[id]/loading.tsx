import CustomBreadcrumbs, {
  BreadcrumbsType,
} from "@/components/breadcrumbs/CustomBreadcrumbs";
import MainLayout from "@/components/layouts/MainLayout";
import { Divider, Skeleton, Stack } from "@mui/material";
import React from "react";

const listBreadcrumb: BreadcrumbsType[] = [
  {
    title: "Ad Performance Summary",
    url: "/dashboard",
  },
  {
    title: "Detail",
  },
];

const loading = () => {
  return (
    <MainLayout>
      <CustomBreadcrumbs
        title="Ad Performance Summary Detail"
        urlBack="/dashboard"
        listBreadcrumb={listBreadcrumb}
      />

      <Stack sx={{ p: 3, bgcolor: "#fff", mt: 3 }} spacing={2}>
        <Skeleton variant="rounded" width={250} height={50} />
        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={250} height={30} />

        <Divider sx={{ my: 2 }} />

        <Skeleton variant="rounded" width={250} height={40} />

        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={250} height={30} />

        <Divider sx={{ my: 2 }} />
        <Skeleton variant="rounded" width={250} height={40} />
        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={250} height={30} />
        <Skeleton variant="rounded" width={250} height={30} />

        <Divider sx={{ my: 2 }} />

        <Skeleton variant="rounded" width={250} height={40} />
      </Stack>
    </MainLayout>
  );
};

export default loading;
