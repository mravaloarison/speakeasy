import { Component } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';


class Email extends Component {
    state = {
        data: [],
    };

    ComposeEmail = () => {
        const emailPrompt = document.getElementById("emailPrompt").value;
        const formData = new FormData();
        formData.append("email_prompt", emailPrompt);
      
        fetch("http://127.0.0.1:5000/email", {
            method: "POST",
            body: formData,
        })
        .then(result => result.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    };
      

    render() {
        return (
            <Stack spacing={4}>
                <div>
                    <Typography variant="subtitle1 h2" component="h2" gutterBottom>
                        Email App ✉️
                    </Typography>

                    <Typography variant="body1" component="h2" gutterBottom>
                        A writing assistant designed to help users compose emails quickly and efficiently. The app help users find the right words 
                        and phrases to express their ideas clearly and concisely to make emails look professional and polished.
                    </Typography>
                </div>
                <TextField
                    id="emailPrompt"
                    label="Write your message"
                    fullWidth multiline
                    rows={6}
                    variant="filled"
                />

                <div>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={this.ComposeEmail}>Compose</Button>
                </div>

                <div>{this.state.data}</div>

            </Stack>
        )
    }
};

export default Email;