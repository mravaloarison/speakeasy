import { Component } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
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
        this.setState({
            loading: true,
        }, this.SendIt);
    };

    
    SendIt = () => {
        document.querySelector(".text").innerHTML = "";

        const emailPrompt = document.getElementById("emailPrompt").value;
        const formData = new FormData();
        formData.append("email_prompt", emailPrompt);
      
        fetch("http://127.0.0.1:5000/generate-email", {
            method: "POST",
            body: formData,
        })
        .then(result => result.json())
        .then(response => {
            const filteredResponse = response.data.email_content.slice(2);
            console.log(filteredResponse.split("\n").slice(2).join("\n"));
            const textArray = filteredResponse.split("\n").slice(2);

            let count = 0;
            textArray.forEach(e => {
                document.querySelector(".text").innerHTML += `<p class="text-${count}"></p>`;
                count++;
            });

            let masterTl = gsap.timeline();
            for (let i = 0; i < count; i++) {
                let tl = gsap.timeline();
                tl.to(".text-"+i, {
                    text: textArray[i],
                    duration: textArray[i].length / 30
                });

                masterTl.add(tl);
            }

            this.setState({
                loading: false,
            })
        })
        .catch(err => console.log(err))
    }

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
                    className='emailPrompt'
                    label="Write your message"
                    fullWidth multiline
                    rows={6}
                    variant="filled"
                />

                <div>
                    {/* <Button variant="contained" endIcon={<SendIcon />} onClick={this.ComposeEmail}>Compose</Button> */}
                    <LoadingButton
                        size="small"
                        onClick={this.handleClick}
                        endIcon={<SendIcon />}
                        loading={this.state.loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        <span>Compose</span>
                    </LoadingButton>
                </div>

                <Card  variant="outlined" className='text' sx={{ paddingX: 2 }}></Card>

            </Stack>
        )
    }
};

export default Email;