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
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import Email from './Email';
import Reword from './Reword';
import Translate from './Translate';
// import { Paper } from '@mui/material';


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
      <Container maxWidth="md">
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
    )
  }
};


export default App;
