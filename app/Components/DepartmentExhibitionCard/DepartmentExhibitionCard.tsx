import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

export interface DepartmentExhibitionCardProps {
  department: string
  title: string
  description: string
}

// 学科別テーマカラーの定義
const departmentColors: Record<string, string> = {
  機械工学科: "#E783AC",
  電気電子工学科: "#AE904A",
  電子情報工学科: "#89D0DD",
  生物応用科学科: "#6E9D45",
  材料工学科: "#002670",
};

export default function DepartmentExhibitionCard(props: DepartmentExhibitionCardProps) {
  const { department, title, description } = props;
  const themeColor = departmentColors[department] || "#4a90e2"; // デフォルトカラー
  return (
    <Card sx={{
      "width": "350px",
      "height": "stretch",
      "border": `2px solid ${themeColor}`,
      "boxShadow": `0 0 15px ${themeColor}40`,
      "&:hover": {
        boxShadow: `0 0 25px ${themeColor}60`,
        transform: "translateY(-2px)",
        transition: "all 0.3s ease-in-out",
      },
    }}
    >
      <Box
        sx={{
          height: "fit-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          justifyContent: "flex-start",
        }}
      >
        <CardContent>
          <Chip
            label={department}
            size="small"
            sx={{
              "mb": 1,
              "backgroundColor": themeColor,
              "color": "white",
              "fontWeight": "bold",
              "& .MuiChip-label": {
                textShadow: "0 0 5px rgba(255, 255, 255, 0.3)",
              },
            }}
          />
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
