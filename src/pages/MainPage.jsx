import { Box, Typography } from "@mui/material";
import Avatar from "../commponents/avatar/Avatar";
import MediaManager from "../commponents/mediaManager/MediaManager";
// import SkillsCard from "../commponents/skillsCard/SkillsCard";

export default function MainPage() {
  return (
    <Box>
      <Box>
        <Avatar image={MediaManager("avatar")} />
        <Typography>Андреев Владимир</Typography>
      </Box>
    </Box>
  );
}
