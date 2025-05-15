/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { type FC, useCallback, useMemo, useState } from "react";
import { AdType } from "@/type/data";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_Row,
} from "material-react-table";
import { encryptURL } from "@/utils";
import { Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { trackEvent } from "@/lib/ga";

interface TableAdsProps {
  data: AdType[];
}

const TableAds: FC<TableAdsProps> = ({ data }) => {
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState([]);
  const [sorting, setSorting] = useState([]);

  const handleDetailClick = useCallback(
    (record: AdType) => {
      trackEvent("AdCard", "Click Detail", record.clientName);

      router.push(
        `/dashboard/ad-performace-summary/detail/${encryptURL(record.id)}`
      );
    },
    [router]
  );

  const columns = useMemo<MRT_ColumnDef<AdType>[]>(
    () => [
      {
        accessorKey: "clientName",
        header: "Name",
        Cell: ({ renderedCellValue, row }) => {
          return (
            <Link
              underline="none"
              sx={{ cursor: "pointer" }}
              onClick={() => handleDetailClick(row.original)}
            >
              {renderedCellValue}
            </Link>
          );
        },
      },
      {
        accessorKey: "kpiType",
        header: "KPI Type",
      },
      {
        accessorKey: "targetKPI",
        header: "Target KPI",
      },
      {
        accessorKey: "actualValue",
        header: "Actual KPI",
      },
      {
        accessorKey: "date",
        header: "Date",
      },
    ],
    [handleDetailClick]
  );

  const getRowProps = useCallback(
    (row: MRT_Row<AdType>) => ({
      sx: {
        backgroundColor:
          row.original.actualValue < row.original.targetKPI
            ? "#ffebee"
            : "#fff",
      },
    }),
    []
  );

  const handleGlobalFilterChange = (value: string) => {
    setGlobalFilter(value);
    trackEvent("Table", "Search", value);
  };

  const handleColumnFiltersChange = (filters: any) => {
    setColumnFilters(filters);

    const resFilters = filters();

    if (resFilters?.length > 0)
      resFilters?.forEach(({ id, value }: { id: string; value: string }) => {
        trackEvent("Table", "Filter", `${id}: ${value}`);
      });
  };

  const handleSortingChange = (sorts: any) => {
    setSorting(sorts);

    const resSorts = sorts();

    if (resSorts?.length > 0) {
      const { id, desc } = resSorts[0];
      trackEvent("Table", "Sort", `${id}: ${desc ? "DESC" : "ASC"}`);
    }
  };

  const table = useMaterialReactTable({
    data: data,
    columns,
    enableRowVirtualization: true,
    enableDensityToggle: false,
    enableHiding: false,
    enableFullScreenToggle: false,
    muiTableBodyRowProps: ({ row }) => getRowProps(row),

    // Event Tracking
    onGlobalFilterChange: handleGlobalFilterChange,
    onColumnFiltersChange: handleColumnFiltersChange,
    onSortingChange: handleSortingChange,
    state: {
      globalFilter,
      columnFilters,
      sorting,
    },
  });

  return (
    <>
      <MaterialReactTable table={table} />
    </>
  );
};

export default TableAds;
