"use client";

import React, { type FC } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import type { AdType } from "@/type/data";

interface PerformanceChartProps {
  data: AdType;
}

enum ChartType {
  Line = "line",
  Bar = "bar",
  Area = "area",
  Pie = "pie",
  Radar = "radar",
  Scatter = "scatter",
}

enum Align {
  Left = "left",
  Center = "center",
  Right = "right",
}

const PerformanceChart: FC<PerformanceChartProps> = ({ data }) => {
  // Persiapkan data untuk chart
  const chartData = {
    series: [
      {
        name: "Spend ($)",
        data: data.performance.map((entry) => entry.spend),
      },
      {
        name: "Impressions",
        data: data.performance.map((entry) => entry.impressions),
      },
      {
        name: "Clicks",
        data: data.performance.map((entry) => entry.clicks),
      },
      {
        name: "Conversions",
        data: data.performance.map((entry) => entry.conversions),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: ChartType.Line,
        zoom: {
          enabled: true,
        },
      },
      stroke: {
        width: 2,
      },
      title: {
        text: "Daily Performance",
        align: Align.Center,
      },
      xaxis: {
        categories: data.performance.map((entry) => entry.date),
      },
      yaxis: {
        title: {
          text: "Value",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
    },
  };

  return (
    <Box sx={{ p: 2, borderRadius: 2, mb: 2, minWidth: "500px" }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Daily Performance
      </Typography>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </Box>
  );
};

export default PerformanceChart;
