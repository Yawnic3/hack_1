"use client";

import React, { useState } from "react";
import axios from "axios";
import { Container, Typography, Button, Card, CardContent } from "@mui/material";

export default function PickUpLineGenerator() {
  const [pickupLine, setPickupLine] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchPickupLine = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post("http://localhost:5000/api/get-pickup-line");
      setPickupLine(response.data.pickupLine); // Set the fetched pickup line to state
    } catch (error) {
      setError("Error fetching pickup line. Please try again.");
      console.error("Error fetching pickup line:", error);
    } finally {
      setLoading(false); // Set loading to false after the request is done
    }
  };

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
        padding: 3,
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          borderRadius: "15px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#fff",
          padding: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "#ff1493",
            }}
          >
            Pickup Line Generator
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginBottom: 3,
              color: "#666",
            }}
          >
            Press the button to get a fun pickup line!
          </Typography>

          {/* Button to trigger the API call */}
          <Button
            variant="contained"
            color="primary"
            onClick={fetchPickupLine}
            disabled={loading}
            sx={{
              textTransform: "none",
              fontSize: "16px",
              backgroundColor: "#ff1493",
              "&:hover": {
                backgroundColor: "#ff69b4",
              },
              marginBottom: 3,
            }}
          >
            {loading ? "Loading..." : "Get Pickup Line"}
          </Button>

          {/* Display the pickup line or error message */}
          {pickupLine && (
            <Typography
              variant="h6"
              align="center"
              sx={{
                color: "#333",
                fontStyle: "italic",
                padding: 2,
                backgroundColor: "#f8f8f8",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              `&quot;`{pickupLine}`&quot;`
            </Typography>
          )}

          {/* Show error message if any */}
          {error && (
            <Typography variant="body1" color="error" align="center" sx={{ marginTop: 2 }}>
              {error}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
