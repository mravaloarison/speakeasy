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
                <div>
                    <Typography variant="subtitle1 h2" component="h2" gutterBottom>
                        Reword App ✨
                    </Typography>

                    <Typography variant="body1" component="h2" gutterBottom>
                        A writing assistant designed to help users compose emails quickly and efficiently. The app help users find the right words 
                        and phrases to express their ideas clearly and concisely to make emails look professional and polished.
                    </Typography>
                </div>
                <TextField
                    id="OriginalText"
                    label="Write your text/sentence"
                    fullWidth multiline
                    rows={6}
                    variant="filled"
                />

                <div>
                    <Button variant="contained" endIcon={<PasswordIcon />} onClick={this.RewordSentence}>Reword</Button>
                </div>

            </Stack>
        )
    }
}

export default Reword;