import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, IconButton, type SxProps, type Theme } from "@mui/material";
import { grey } from "@mui/material/colors";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import React, {
  createContext,
  type HTMLAttributes,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

interface CarouselComponentProps
  extends HTMLAttributes<HTMLDivElement>,
  CarouselProps {
  sx?: SxProps<Theme>
  autoPlay?: boolean
}

function Carousel({
  ref,
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  autoPlay = false,
  sx,
  children,
  ...props
}: CarouselComponentProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  const customPlugins = useMemo(() => {
    return [
      ...(autoPlay ? [Autoplay({ delay: 2000 })] : []),
      ...(plugins || []),
    ];
  }, [autoPlay, plugins]);

  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    customPlugins,
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      }
      else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  const contextValue = useMemo(
    () => ({
      carouselRef,
      api,
      opts,
      orientation:
        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    }),
    [
      carouselRef,
      api,
      opts,
      orientation,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext,
    ],
  );

  return (
    <CarouselContext value={contextValue}>
      <Box
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        sx={{
          position: "relative",
          ...sx,
        }}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </Box>
    </CarouselContext>
  );
}

interface CarouselContentProps extends HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>
}

function CarouselContent({
  ref,
  sx,
  ...props
}: CarouselContentProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <Box ref={carouselRef} sx={{ overflow: "hidden" }}>
      <Box
        ref={ref}
        sx={{
          display: "flex",
          flexDirection: orientation === "horizontal" ? "row" : "column",
          ml: orientation === "horizontal" ? -2 : 0,
          mt: orientation === "vertical" ? -2 : 0,
          ...sx,
        }}
        {...props}
      />
    </Box>
  );
}

interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>
}

function CarouselItem({
  ref,
  sx,
  ...props
}: CarouselItemProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  const { orientation } = useCarousel();

  return (
    <Box
      ref={ref}
      role="group"
      aria-roledescription="slide"
      sx={{
        minWidth: 0,
        flexShrink: 0,
        flexGrow: 0,
        flexBasis: "100%",
        pl: orientation === "horizontal" ? 2 : 0,
        pt: orientation === "vertical" ? 2 : 0,
        ...sx,
      }}
      {...props}
    />
  );
}

interface CarouselNavigationProps {
  size?: "small" | "medium" | "large"
  sx?: SxProps<Theme>
}

function CarouselPrevious({
  ref,
  sx,
  size = "small",
  ...props
}: CarouselNavigationProps & {
  ref?: React.RefObject<HTMLButtonElement | null>
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <IconButton
      ref={ref}
      size={size}
      sx={{
        "position": "absolute",
        ...(orientation === "horizontal"
          ? {
              left: -32,
              top: "50%",
              transform: "translateY(-50%)",
            }
          : {
              top: -32,
              left: "50%",
              transform: "translateX(-50%) rotate(90deg)",
            }),
        "border": 1,
        "borderColor": "divider",
        "bgcolor": "background.paper",
        "&:hover": {
          bgcolor: grey[400],
        },
        ...sx,
      }}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      aria-label="Previous slide"
      {...props}
    >
      <ArrowBackIos sx={{ fontSize: 16 }} />
    </IconButton>
  );
}

function CarouselNext({
  ref,
  sx,
  size = "small",
  ...props
}: CarouselNavigationProps & {
  ref?: React.RefObject<HTMLButtonElement | null>
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <IconButton
      ref={ref}
      size={size}
      sx={{
        "position": "absolute",
        ...(orientation === "horizontal"
          ? {
              right: -32,
              top: "50%",
              transform: "translateY(-50%)",
            }
          : {
              left: "50%",
              transform: "translateX(-50%) rotate(90deg)",
            }),
        "border": 1,
        "borderColor": "divider",
        "bgcolor": "background.paper",
        "&:hover": {
          bgcolor: grey[400],
        },
        ...sx,
      }}
      disabled={!canScrollNext}
      onClick={scrollNext}
      aria-label="Next slide"
      {...props}
    >
      <ArrowForwardIos sx={{ fontSize: 16 }} />
    </IconButton>
  );
}

interface CarouselFooterProps extends HTMLAttributes<HTMLDivElement> {
  sx?: SxProps<Theme>
}

function CarouselFooter({
  ref,
  sx,
  children,
  ...props
}: CarouselFooterProps & { ref?: React.RefObject<HTMLDivElement | null> }) {
  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        gap: 1,
        mt: 2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselFooter,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
};
