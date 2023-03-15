import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from "react";
import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TranslateIcon from '@mui/icons-material/Translate';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import LinkIcon from '@mui/icons-material/Link';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import Email from './Email';
import Reword from './Reword';
import Translate from './Translate';
// import { Paper } from '@mui/material';

import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
// import SpeechRecognition from './Translate';

//




const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


class App extends Component {
  ListOfApps = [
    {
      name: "Email",
      link: <Email />,
      icon: <EmailIcon />,
      isOn: false,
    },
    {
      name: "Translate",
      link: <Translate />,
      icon: <TranslateIcon />,
      isOn: false,
    },
    {
      name: "Reword",
      link: <Reword />,
      icon: <EditIcon />,
      isOn: false,
    }
  ]


  AppBtn = () => {
    const rows = this.ListOfApps.map((row,index) => {
      return <Button 
          key={index} 
          variant="outlined" size="small" 
          startIcon={row.icon}
          id={row.name}
          onClick={this.AppSelected}
        >
          {row.name}
        </Button>
    })

    return (
      <Stack direction="row" spacing={2}>
        {rows}
      </Stack>
    )
  }


  AppSelected = (event) => {
    const selected = this.ListOfApps.filter((app) => { return app.name === event.target.id });
    ReactDOM.render(selected["0"].link, document.getElementById("ActiveApp"));
  };


  render() {
    return (
      <>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Stack direction="row" justifyContent="space-between" sx={{ paddingY: 2 }}>
              <Typography variant="h6" component="div">
                🗣 Speak Easy
              </Typography>
              <Button startIcon={<LinkIcon />} color="inherit" onClick={() => window.open("https://github.com/mravaloarison/speakeasy","_blank")}>Github</Button>
            </Stack>
          </Container>
        </AppBar>


        <Container maxWidth="md" sx={{ paddingY: 4, minHeight: "75vh" }}>
          <Stack spacing={4} sx={{ m: "1rem" }}>

            {/* Title */}
            <Typography variant="h5" component="h2">
            👋 Say goodbye to language barriers and experience a world 🌎 where language is no longer a barrier to understanding.
            </Typography>


            {/* List of all Apps available */}
            <this.AppBtn />


            {/* App active */}
            <div component="div" sx={{ 
              p: 2.5,
              borderRadius: ".50rem",
              }}
            id="ActiveApp">

              <Div>{"✅ Please select an App to get started ..."}</Div>
              
            </div>
          </Stack>
        </Container>

        <Container maxWidth="lg">
          <Divider variant="middle" />
          <Stack direction="row" justifyContent="space-between" sx={{ p: 2, fontSize: 12, fontWeight: 30 }}>
            <p>© Speak Easy, Inc 2023.</p>
            <Link href="#" target="_blank" underline="none" sx={{ paddingY: 1.5 }}>
              Terms of Service
            </Link>
          </Stack>
        </Container>
      </>
    )
  }
};


export default App;
