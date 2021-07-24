import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export function useDynamicColumns({ xs, sm, md, lg, xl }: Props): number {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isSm = useMediaQuery(theme.breakpoints.up("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  if (isXl) return xl;
  if (isLg) return lg;
  if (isMd) return md;
  if (isSm) return sm;
  if (isXs) return xs;
  return 12;
}
