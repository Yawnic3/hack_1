import React, { useState } from 'react';
import axios from 'axios';
import { Container, Box, Typography, Button } from '@mui/material';

export default function PickUpLineGenerator() {
  const [pickupLine, setPickupLine] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchPickupLine = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/get-pickup-line');
      setPickupLine(response.data.pickupLine); // Set the fetched pickup line to state
    } catch (error) {
      setError('Error fetching pickup line. Please try again.');
      console.error('Error fetching pickup line:', error);
    } finally {
      setLoading(false); // Set loading to false after the request is done
    }
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mt={4}>
        <Typography variant="h4" gutterBottom>
          Pickup Line Generator
        </Typography>

        {/* Button to trigger the API call */}
        <Button
          variant="contained"
          color="primary"
          onClick={fetchPickupLine}
          disabled={loading}
          sx={{ mb: 2 }}
        >
          {loading ? 'Loading...' : 'Get Pickup Line'}
        </Button>

        {/* Display the pickup line or error message */}
        {pickupLine && (
          <Typography variant="h6" align="center" color="textSecondary">
            "{pickupLine}"
          </Typography>
        )}

        {/* Show error message if any */}
        {error && (
          <Typography variant="body1" color="error" align="center" mt={2}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
}
