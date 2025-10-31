import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PersonalSponsorItem {
  name: string
}

interface PersonalSponsorComponentProps {
  sponsors: PersonalSponsorItem[]
}

function sortByJapaneseName(sponsors: PersonalSponsorItem[]): PersonalSponsorItem[] {
  return [...sponsors].sort((a, b) => {
    const options: Intl.CollatorOptions = {
      numeric: true,
      caseFirst: "upper",
      sensitivity: "accent",
      ignorePunctuation: false,
      usage: "sort",
    };

    const collator = new Intl.Collator("ja-JP", options);
    return collator.compare(a.name, b.name);
  });
}

function PersonalSponsorCard({ name }: PersonalSponsorItem): ReactNode {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: "bold",
        lineHeight: 1.2,
        color: "black",
        textAlign: "center",
        fontSize: {
          xs: "1.1rem",
          sm: "1.75rem",
          md: "2rem",
        },
      }}
    >
      {name}
    </Typography>
  );
}

function PersonalSponsor(props: PersonalSponsorComponentProps): ReactNode {
  const { sponsors } = props;

  if (sponsors.length === 0) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography
          variant="h6"
          sx={{
            color: "rgba(0, 0, 0, 0.6)",
            fontWeight: "normal",
          }}
        >
          個人協賛者様の情報は準備中です。
        </Typography>
      </Box>
    );
  }

  const sortedSponsors = sortByJapaneseName(sponsors);

  return (
    <Box sx={{ mt: { xs: 3, sm: 4, md: 5 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 3, sm: 4, md: 6 },
          width: { xs: "95%", sm: "90%", md: "80%" },
          margin: "0 auto",
        }}
      >
        {sortedSponsors.map(sponsor => (
          <PersonalSponsorCard key={sponsor.name} {...sponsor} />
        ))}
      </Box>
    </Box>
  );
}

export default PersonalSponsor;
