import type { Meta, StoryObj } from "@storybook/react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import {
  Carousel,
  CarouselContent,
  CarouselFooter,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "radio",
      options: ["horizontal", "vertical"],
      description: "カルーセルの向き",
    },
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;
function SampleCard({ index }: { index: number }) {
  return (
    <Card
      sx={{
        minHeight: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CardContent>
        <Typography variant="h4" color="primary" gutterBottom>
          Slide
          {" "}
          {index + 1}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is sample content for slide
          {" "}
          {index + 1}
        </Typography>
      </CardContent>
    </Card>
  );
}

export const Default: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: "auto", px: 6 }}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={index}>
              <SampleCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 6 }}>
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.333333%",
                },
              }}
            >
              <Box sx={{ p: 1 }}>
                <SampleCard index={index} />
              </Box>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Box sx={{ maxWidth: 400, mx: "auto", px: 6, py: 8 }}>
      <Carousel orientation="vertical">
        <CarouselContent sx={{ maxHeight: 400 }}>
          {Array.from({ length: 5 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={index}>
              <SampleCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
  ),
};

export const WithLoop: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: "auto", px: 6 }}>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={index}>
              <SampleCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Box>
  ),
};

export const WithoutNavigation: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={index}>
              <SampleCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Box>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Box sx={{ maxWidth: 600, mx: "auto" }}>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <CarouselItem key={index}>
              <SampleCard index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselFooter>
          <CarouselPrevious sx={{ position: "static", transform: "none" }} />
          <CarouselNext sx={{ position: "static", transform: "none" }} />
        </CarouselFooter>
      </Carousel>
    </Box>
  ),
};

export const WithFooterMultipleItems: Story = {
  render: () => (
    <Box sx={{ maxWidth: 900, mx: "auto" }}>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "50%",
                  md: "33.333333%",
                },
              }}
            >
              <Box sx={{ p: 1 }}>
                <SampleCard index={index} />
              </Box>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselFooter>
          <CarouselPrevious sx={{ position: "static", transform: "none" }} />
          <CarouselNext sx={{ position: "static", transform: "none" }} />
        </CarouselFooter>
      </Carousel>
    </Box>
  ),
};
