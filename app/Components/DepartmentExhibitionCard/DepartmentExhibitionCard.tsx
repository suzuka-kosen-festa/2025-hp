import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

export type DepartmentExhibitionCardProps = {
  department: string;
  title: string;
  description: string;
};
export default function DepartmentExhibitionCard(props: DepartmentExhibitionCardProps) {
  const { department, title, description } = props;
  const theme = useTheme();
  return (
    <Card sx={{
       width: "350px"
       }}
    >
    <Box
      sx={{
        height: "250px",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "flex-start"
      }}
    >
      <CardContent>
        <Chip label={department} color="primary" size="small" sx={{ mb: 1 }} />
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Box>
    </Card>
  );
}
