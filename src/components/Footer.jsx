import { Box, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Typography variant="body2">
        <Link
          href="https://github.com/saint-nectaire/Momentum"
          target="_blank"
          underline="hover"
        >
          View on GitHub
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
