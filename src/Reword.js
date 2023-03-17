import { Component } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PasswordIcon from '@mui/icons-material/Password';
import { LoadingButton } from "@mui/lab";
import gsap from "gsap";


class Reword extends Component {
    state = {
        loading: false,
    }

    RewordSentence = () => {
        this.setState({
            loading: true,
        }, () => {
            this.CallReword();
        })
    }

    CallReword = () => {
        document.getElementById("response").innerHTML = "";
        const OriginalText = document.getElementById("OriginalText").value;
        const formData = new FormData();
        formData.append("original_text", OriginalText);

        fetch("https://speak-easy.onrender.com/reword", {
            method: "POST",
            body: formData
        })
            .then(response => response.json())
            .then(response => {
                console.log(response.data.reworded.slice(2));
                const res = response.data.reworded.slice(2);
                const resArr = res.split('\n');

                resArr.forEach((text, index) => {
                    document.getElementById("response").innerHTML += `<p class='res-${index}'></p>`
                });

                const masterTl = gsap.timeline();
                for (let i in resArr) {
                    let tl = gsap.timeline();
                    tl.to(`.res-${i}`, {
                        text: resArr[i],
                        duration: resArr[i].length / 30,
                    });

                    masterTl.add(tl);
                };

                this.setState({ loading: false })
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Stack spacing={4}>
                <Typography variant="h4">Reword App</Typography>
                <Stack spacing={2}>
                    <Typography variant="h5">Overview</Typography>
                    <Typography variant="body1">
                        A writing assistant designed to help users compose emails quickly and efficiently. The app help users find the right words 
                        and phrases to express their ideas clearly and concisely to make emails look professional and polished.
                    </Typography>
                </Stack>
                <Stack spacing={3}>
                    <Typography variant="h5">App</Typography>
                    <TextField
                        id="OriginalText"
                        label="Write your text/sentence"
                        fullWidth multiline
                        rows={6}
                        variant="filled"
                    />

                </Stack>


                <div>
                    <LoadingButton
                        onClick={this.RewordSentence}
                        endIcon={<PasswordIcon />}
                        loading={this.state.loading}
                        loadingPosition="end"
                        variant="contained"
                    >
                        <span>Reword</span>
                    </LoadingButton>
                </div>

                <div id="response"></div>

            </Stack>
        )
    }
}

export default Reword;