"use client"; // Ensure this is at the top for Next.js to enable client-side rendering

import { Container, Box, Typography, Card, CardContent } from "@mui/material";

export default function AwarenessPage() {
    return (
        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffc0cb", // Soft pink background
                padding: "16px", // Stable padding value
            }}
        >
            <Card
                sx={{
                    maxWidth: "600px", // Ensures consistent layout
                    textAlign: "center",
                    borderRadius: "20px",
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "#ffffff",
                    padding: "24px", // Ensures padding stays consistent
                }}
            >
                <CardContent>
                    <Typography
                        variant="h3"
                        component="h1" // Ensure semantic tag consistency
                        sx={{
                            color: "#ff1493",
                            fontWeight: "bold",
                            marginBottom: "16px",
                        }}
                    >
                        🚨 Beware of Scams! 🚨
                    </Typography>
                    <Typography
                        variant="h5"
                        component="p" // Proper semantics
                        sx={{
                            color: "#333",
                            marginBottom: "24px",
                        }}
                    >
                        "Hot Singles in Your Area" messages are often phishing scams. 
                        They aim to steal your personal information or trick you into sending money.
                    </Typography>
                    <Box
                        sx={{
                            backgroundColor: "#ff1493",
                            color: "#fff",
                            padding: "16px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            fontWeight: "500",
                        }}
                    >
                        Don't fall for it! Stay safe online, and verify the source of any suspicious messages.
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
