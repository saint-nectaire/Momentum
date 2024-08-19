import { Box, Typography, Link } from '@mui/material';
import { footerStyles } from '../styles/styles'

function Footer() {
  return (
    <Box
      component="footer"
      sx={footerStyles}
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
