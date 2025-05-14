import React, { type FC } from "react";
import {
  Box,
  Breadcrumbs,
  Link as MUILink,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type BreadcrumbsType = {
  title: string;
  url?: string;
};

interface CustomBreadcrumbsType {
  title: string;
  urlBack?: string;
  listBreadcrumb?: BreadcrumbsType[];
}

const CustomBreadcrumbs: FC<CustomBreadcrumbsType> = ({
  title,
  urlBack,
  listBreadcrumb,
}) => {
  return (
    <Stack direction="row" spacing={1} alignItems={"center"}>
      {urlBack && (
        <Link href={urlBack}>
          <ArrowBackIcon style={{ fontSize: "24px" }} />
        </Link>
      )}

      <Box>
        {title && (
          <Typography
            variant="h1"
            gutterBottom
            sx={{ fontSize: "25px", fontWeight: 600 }}
          >
            {title}
          </Typography>
        )}

        {listBreadcrumb && (
          <Breadcrumbs aria-label="breadcrumb">
            {listBreadcrumb?.map((item, idx) =>
              item.url ? (
                <MUILink
                  key={idx}
                  component={Link}
                  color="inherit"
                  href={item.url}
                  sx={{ textDecoration: "none" }}
                >
                  {item.title}
                </MUILink>
              ) : (
                <Typography key={idx} sx={{ color: "text.primary" }}>
                  {item.title}
                </Typography>
              )
            )}
          </Breadcrumbs>
        )}
      </Box>
    </Stack>
  );
};

export default CustomBreadcrumbs;
