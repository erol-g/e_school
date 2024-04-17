import { Box,  Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userId = userInfo ? userInfo.userId : null;
  const role = userInfo ? userInfo.role : null
  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getPersonelInfo/${role}/${userId}`
        );
        if (!response.ok) {
          throw new Error(`Error fetching notifications: ${response.status}`);
        }
        const data = await response.json();
        setProfileInfo(data.data[0]);
        console.log("🚀 ~ fetchProfileInfo ~ data:", data.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchProfileInfo();
  }, [userId]);
  
  return (
    <Box>
     <Typography variant="h4">Profile Information</Typography>
      {Object.keys(profileInfo).map((key) => (
        <Typography key={key}>
          {key}: {profileInfo[key]}
        </Typography>
      ))}
  </Box>
  )
};

export default Profile;
