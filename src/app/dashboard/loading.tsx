import React from "react";
import CustomBreadcrumbs from "@/components/breadcrumbs/CustomBreadcrumbs";
import MainLayout from "@/components/layouts/MainLayout";
import { Grid, Skeleton } from "@mui/material";

const loading = () => {
  return (
    <MainLayout>
      <CustomBreadcrumbs title="Ad Performance Summary" />

      <Grid container spacing={2} sx={{ mt: 3 }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((val) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={val}>
            <Skeleton variant="rounded" width={210} height={30} />
          </Grid>
        ))}
      </Grid>
    </MainLayout>
  );
};

export default loading;
