import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Modal, Box, Typography } from "@mui/material";
import "./notifications.css";

const NotificationsTable = () => {
  const [notifications, setNotifications] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
 
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userEmail = userInfo ? userInfo.email : null;
  const columns = [
    { field: "senderEmail", headerName: "Sender Email", width: 200, color:'red',   valueGetter: (value, row) => `${row.senderEmail || ""}`},

    {
      field: "content",
      headerName: "Content",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 400,
      valueGetter: (value, row) => `${row.content || ""}`,
    },
  ];

  const handleOpenModal = (notification) => {
    setSelectedNotification(notification); // Store selected notification data
    setOpen(true);
  };
  
  const handleCloseModal = () => {
    setOpen(false);
  };
  
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/getMessage/${userEmail}`
        )
        .then(data => data.json())
        .then(data => {
          setNotifications(data.messages)})
        if (!response.ok) {
          throw new Error(`Error fetching notifications: ${response.status}`);
        }
        
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [userEmail]);


  return (
    <div>
      <h3>Notifications Table</h3>

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={notifications}
          getRowId={(row) => row._id}
          onRowClick={(row) => handleOpenModal(row)}
          columns={columns}
          style={{color:'red'}}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          checkboxSelection
        />
      </div>
      {/* Modal component */}
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2" >
            Message Content
          </Typography>
          <Typography id="modal-description"  
          className= "content-highlight" >
            {selectedNotification && selectedNotification.row.content}
          </Typography>
          {/* You can add additional details from the selectedNotification object*/}
          <Button onClick={handleCloseModal} variant="contained">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default NotificationsTable;
