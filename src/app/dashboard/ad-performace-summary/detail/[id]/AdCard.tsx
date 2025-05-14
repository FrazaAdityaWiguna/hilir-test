"use client";

import {
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Box,
  LinearProgress,
} from "@mui/material";
import type { AdType } from "@/type/data";
import PerformanceChart from "@/components/chart/PerformanceChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

export default function AdCard(data: AdType) {
  const percentage = (data.actualValue / data.targetKPI) * 100;

  const getProgressColor = () => {
    if (percentage >= 100) return "#4caf50";
    return "#f44336";
  };

  return (
    <Grid container spacing={2} sx={{ mt: 3 }}>
      <Grid size={12}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="h5">{data.campaignName}</Typography>
            <Typography variant="subtitle1">
              Client: {data.clientName}
            </Typography>
            <Typography variant="subtitle1">
              Platform: {data.platform}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">CTR</Typography>
            <Typography variant="h5">{data.ctr}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">CPC</Typography>
            <Typography variant="h5">{data.cpc.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">CPM</Typography>
            <Typography variant="h5">{data.cpm.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 3 }}>
        <Card>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="subtitle1">CPA</Typography>
            <Typography variant="h5">{data.cpa.toFixed(2)}</Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Card sx={{ overflow: "auto" }}>
          <CardContent>
            <PerformanceChart data={data} />
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, md: 4 }}>
        <Stack spacing={2}>
          <Card>
            <CardContent>
              <Typography variant="h5">KPI Overview</Typography>
              <Typography sx={{ color: "text.secondary" }} variant="subtitle2">
                KPI Type: {data.kpiType}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="subtitle1">
                  Actual Value: {data.actualValue}
                </Typography>
                <Box component="span">|</Box>
                <Typography variant="subtitle1">
                  Target KPI: {data.targetKPI}
                </Typography>
              </Stack>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {percentage >= 100 ? (
                  <TrendingUpIcon sx={{ color: "#4caf50" }} />
                ) : (
                  <TrendingDownIcon sx={{ color: "#f44336" }} />
                )}
                <LinearProgress
                  variant="determinate"
                  value={percentage > 100 ? 100 : percentage}
                  sx={{
                    flexGrow: 1,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: getProgressColor(),
                    },
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: 600, ml: 1 }}>
                  {percentage.toFixed(2)}%
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5">Audience</Typography>
              <Typography variant="subtitle1">
                Age Range: {data.audience.ageRange}
              </Typography>
              <Typography variant="subtitle1">
                Gender: {data.audience.gender}
              </Typography>
              <Typography variant="subtitle1">
                Interests: {data.audience.interests.join(", ")}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
}
