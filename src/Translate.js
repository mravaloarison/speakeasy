import { IconButton, Snackbar, Stack, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MicIcon from '@mui/icons-material/Mic';
import { SkipNext } from "@mui/icons-material";
import React, { Component } from 'react';



class Translate extends Component {
    state = {
        transcript: [],
        listenning: false,
        snackState: false,
        snackMessg: ""
    };

    recognition = null;

    componentDidMount() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.interimResults = true;

            // speech result
            this.recognition.onresult = event => {
                const text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join("");
                this.setState({ snackMessg: text });
            };

            // end of speech
            this.recognition.onend = () => {
                document.getElementById("Speech").focus();
                const lastElem = this.state.transcript.length - 1;
                if (this.state.listenning && (this.state.transcript[lastElem] !== this.state.snackMessg)) {
                    this.recognition.start();
                    this.setState({
                        snackState: true,
                        transcript: [
                            ...this.state.transcript,
                            this.state.snackMessg
                        ],
                    }, () => {
                        document.getElementById("Speech").value += this.state.snackMessg + " ";
                    });

                } else {
                    this.setState({
                        snackState: false
                    });
                }
            };
        } 
        
        // In case the browser doesn't Support Speech recognition
        else {
            alert("SpeechRecognition is not supported in this browser.");
        }
    }

    startOrStopListenning = () => {
        // start listen
        if (!this.state.listenning) {
            this.setState({
                listenning: true
            }, () => {
                this.recognition.start();
                document.getElementById("Speech").focus();
            });
        }

        // stop listen
        else {
            this.setState({
                listenning: false
            }, () => {
                this.recognition.stop();
            });
        }
    };


    resetspeech = () => {
        document.getElementById("Speech").value = "";
        this.setState({
            transcript: []
        });
    };

    render() {
        const { snackMessg, snackState } = this.state;

        return (
          <Stack spacing={4}>
      
              {/* Description */}
              <Stack>
                  <Typography variant="subtitle1 h2" component="h2" gutterBottom>
                      Translate App 🤟
                  </Typography>
      
                  <Typography variant="body1" component="h2" gutterBottom>
                      With a powerful translation engine, this app makes it easy to translate any sentence or word with just a few clicks. 
                      Whether you're a business person, traveler, or student, it is the perfect tool to help you communicate effectively in any language.
                  </Typography>
              </Stack>
      
              {/* App */}
              <Stack>
                  <TextField
                      id="Speech"
                      label="Recording goes here ..."
                      fullWidth multiline
                      rows={6}
                      variant="filled"
                  />
                  <Stack
                      direction="row" sx={{ paddingTop: 2 }}
                      spacing={2}
                  >
                      <IconButton onClick={this.resetspeech}><DeleteIcon /></IconButton>
                      <Stack direction="row" spacing={2}>
                          <IconButton onClick={this.startOrStopListenning}><MicIcon /></IconButton>
                          <IconButton><SkipNext /></IconButton>
                      </Stack>
                  </Stack>
                  {/* <p>{transcript.join(" ")}</p> */}
              </Stack>


              {/* Message */}
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

