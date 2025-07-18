
'use client';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <Container component="main" maxWidth="sm" sx={{ py: 8, background: 'linear-gradient(135deg, #E8DEF8 0%, #FFFBFE 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <Typography variant="h2" component="h1" textAlign="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary" textAlign="center" sx={{ mb: 4 }}>
          Have a question or want to work together? Send us a message.
        </Typography>
      </motion.div>

      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mt: 4,
        }}
        noValidate
        autoComplete="off"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
        >
          <TextField
            fullWidth
            label="Your Name"
            variant="outlined"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}
        >
          <TextField
            fullWidth
            label="Your Email"
            variant="outlined"
            type="email"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeInOut' }}
        >
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut' }}
        >
          <Button variant="contained" size="large" type="submit" sx={{ mt: 2 }}>
            Send Message
          </Button>
        </motion.div>
      </Box>
    </Container>
  );
};

export default ContactPage;
