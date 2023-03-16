import { Component } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import PasswordIcon from '@mui/icons-material/Password';

class Reword extends Component {
    RewordSentence = () => {
        alert("Reword!");
    }
    render() {
        return (
            <Stack spacing={4}>
                <Typography variant="h4">Reword App</Typography>
                <Stack spacing={2}>
                    <Typography variant="h5">Overview</Typography>
                    <Typography variant="p" component="p">
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
                    <Button variant="contained" endIcon={<PasswordIcon />} onClick={this.RewordSentence}>Reword</Button>
                </div>

            </Stack>
        )
    }
}

export default Reword;