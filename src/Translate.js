import React, { Component } from 'react';
import { IconButton, Snackbar, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MicIcon from '@mui/icons-material/Mic';
import { SkipNext } from "@mui/icons-material";

class Translate extends Component {
  state = {
    transcript: [],
    listening: false,
    snackState: false,
    snackMessg: ""
  };

  recognition = null;

  componentDidMount() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("SpeechRecognition is not supported in this browser.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.interimResults = true;

    this.recognition.onresult = (event) => {
      const text = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      this.setState({ snackMessg: text });
    };

    this.recognition.onend = () => {
      const lastElem = this.state.transcript.length - 1;

      if (this.state.listening && this.state.transcript[lastElem] !== this.state.snackMessg) {
        this.recognition.start();
        this.setState({
          snackState: true,
          transcript: [...this.state.transcript, this.state.snackMessg],
        });
      } else {
        this.setState({ snackState: false });
      }
    };
  }

  startOrStopListening = () => {
    if (!this.state.listening) {
      this.setState({ listening: true }, () => {
        this.recognition.start();
      });
    } else {
      this.setState({ listening: false }, () => {
        this.recognition.stop();
      });
    }
  };

  resetSpeech = () => {
    document.getElementById("Speech").value = "";
    this.setState({ transcript: [], snackMessg: "" });
  };

  translateSpeech = () => {
    const speech = this.state.transcript.join(" ");
    const language = "French";

    const myform = new FormData();
    myform.append("speech", speech);
    myform.append("language", language);

    fetch("http://127.0.0.1:5000/translate", {
        method: "POST",
        body: myform
    })
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(error => console.log(error))
  };

  render() {
    const { transcript, snackMessg, snackState } = this.state;

    return (
      <Stack spacing={4}>
        <Stack>
          <Typography variant="subtitle1 h2" component="h2" gutterBottom>
            Translate App 🤟
          </Typography>
          <Typography variant="body1" component="h2" gutterBottom>
            With a powerful translation engine, this app makes it easy to translate any sentence or word with just a few clicks. Whether you're a business person, traveler, or student, it is the perfect tool to help you communicate effectively in any language.
          </Typography>
        </Stack>

        <Stack>
          <TextField
            id="Speech"
            label="Recording goes here ..."
            value={transcript.join(" ")}
            fullWidth multiline
            rows={6}
            variant="filled"
          />
          <Stack direction="row" sx={{ paddingTop: 2 }} spacing={2}>
            <IconButton onClick={this.resetSpeech}><DeleteIcon /></IconButton>
            <Stack direction="row" spacing={2}>
              <IconButton onClick={this.startOrStopListening}><MicIcon /></IconButton>
              <IconButton onClick={this.translateSpeech}><SkipNext /></IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Snackbar 
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }} 
          open={snackState} 
          message={snackMessg} 
        />
      </Stack>
    );
  }
}

export default Translate;
