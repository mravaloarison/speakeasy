import { Component } from 'react';
import { LoadingButton } from '@mui/lab';
import { TextField, Typography, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { gsap } from 'gsap';
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

class Email extends Component {
  state = {
    data: [],
    loading: false,
  };

  handleClick = () => {
    this.setState({ loading: true }, this.sendEmail);
  };

  sendEmail = () => {
    document.querySelector(".text").innerHTML = "";

    const emailPrompt = document.getElementById("emailPrompt").value;
    const formData = new FormData();
    formData.append("email_prompt", emailPrompt);
  
    fetch(process.env.FLASK_SERVER + "/generate-email", {
      method: "POST",
      body: formData,
    })
      .then(response => response.json())
      .then(response => {
        const filteredResponse = response.data.email_content.slice(2);
        const textArray = filteredResponse.split("\n").slice(2);

        textArray.forEach((text, index) => {
          document.querySelector(".text").innerHTML += `<p class="text-${index}"></p>`;
        });

        let masterTl = gsap.timeline();
        for (let i = 0; i < textArray.length; i++) {
          let tl = gsap.timeline();
          tl.to(`.text-${i}`, {
            text: textArray[i],
            duration: textArray[i].length / 30
          });

          masterTl.add(tl);
        }

        this.setState({ loading: false });
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Stack spacing={4}>
        <Typography variant='h4'>Email App</Typography>
        <Stack spacing={2}>
          <Typography variant='h5'>Overview</Typography>
          <Typography variant="body1">
            A writing assistant designed to help users compose emails quickly and efficiently. The app help users find the right words and phrases to express their ideas clearly and concisely to make emails look professional and polished.
          </Typography>
        </Stack>
        <Stack spacing={3}>
          <Typography variant='h5'>App</Typography>
          <TextField
            id="emailPrompt"
            className='emailPrompt'
            label="Write your message"
            fullWidth
            multiline
            rows={6}
            variant="filled"
          />
        </Stack>


        <div>
          <LoadingButton
            onClick={this.handleClick}
            endIcon={<SendIcon />}
            loading={this.state.loading}
            loadingPosition="end"
            variant="contained"
          >
            <span>Compose</span>
          </LoadingButton>
        </div>
        <div className='text'></div>
      </Stack>
    )
  }
};

export default Email;
