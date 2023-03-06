import { Component } from "react";
import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TranslateIcon from '@mui/icons-material/Translate';
import EmailIcon from '@mui/icons-material/Email';
import EditIcon from '@mui/icons-material/Edit';
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';



const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


class App extends Component {
  ListOfApps = [
    {
      name: "Email",
      link: "",
      icon: <EmailIcon />,
      isOn: false,
    },
    {
      name: "Translate",
      link: "",
      icon: <TranslateIcon />,
      isOn: false,
    },
    {
      name: "Reword",
      link: "",
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
    alert(event.target.id + " App Selected");
  }

  render() {
    return (
      <Container maxWidth="md">
        <Stack spacing={2} sx={{ m: "1rem" }}>

          {/* Title */}
          <Typography variant="h5" component="h2">
          👋 Say goodbye to language barriers and experience a world 🌎 where language is no longer a barrier to understanding.
          </Typography>

          {/* List of all Apps available */}
          <this.AppBtn />


          {/* App active */}
          <Box component="div" sx={{ 
            p: 2,
            border: ".1rem solid silver",
            borderRadius: ".25rem",
            }}
          id="ActiveApp">

            <Div>{"✅ Please select an App to get started ..."}</Div>
            
          </Box>
        </Stack>
      </Container>
    )
  }
};

export default App;
