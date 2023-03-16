import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Tab,
  Toolbar,
  Typography,
  tabsClasses,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import TranslateIcon from '@mui/icons-material/Translate';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import { TabContext, TabList, TabPanel } from '@mui/lab';

import Email from './Email';
import Reword from './Reword';
import Translate from './Translate';

const ListOfApps = [
  { name: 'Email', link: <Email />, icon: <EmailIcon /> },
  { name: 'Translate', link: <Translate />, icon: <TranslateIcon /> },
  { name: 'Reword', link: <Reword />, icon: <EditIcon /> },
];

const App = () => {
  const [selectedApp, setSelectedApp] = useState(1);

  const handleAppSelected = (event, newValue) => {
    setSelectedApp(newValue);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button
              color="inherit"
              onClick={() => window.open('https://github.com/mravaloarison/speakeasy', '_blank')}
            >
              Github
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ width: '100%', Typography: 'body1', p: 0 }}>
        <TabContext value={selectedApp}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList
              onChange={handleAppSelected}
              variant="scrollable"
              allowScrollButtonsMobile
              sx={{
                [`& .${tabsClasses.scrollButtons}`]: {
                  '&.Mui-disabled': { opacity: 0.3 },
                },
              }}
            >
              {ListOfApps.map((item, index) => (
                <Tab label={item.name} value={index} key={index} icon={item.icon} iconPosition="start" />
              ))}
            </TabList>
          </Box>
          {ListOfApps.map((item, index) => (
            <TabPanel value={index} sx={{ bgcolor: '#f6f6f6' }}>
              <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                {item.link}
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                  <Container sx={{ padding: { sm: '3rem 3rem' } }} maxWidth='md'>
                    {item.link}
                  </Container>
              </Box>
            </TabPanel>
          ))}
        </TabContext>
      </Box>

      <Box sx={{ borderTop: 1, borderColor: 'divider', bgcolor: '#fff', padding: 2 }}>
          <Box sx={{ padding: 1 }}>
            <Typography variant='caption'>© Speak Easy 2023, by Mami</Typography>
          </Box>
      </Box>
    </>
  );
};

export default App;
