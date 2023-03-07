import { Component } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import MicIcon from '@mui/icons-material/Mic';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { SkipNext } from "@mui/icons-material";


class Translate extends Component {
    render() {
        return (
            <Stack spacing={4}>
                <div>
                    <Typography variant="subtitle1 h2" component="h2" gutterBottom>
                        Translate App 🤟
                    </Typography>

                    <Typography variant="body1" component="h2" gutterBottom>
                        With a powerful translation engine, this app makes it easy to translate any sentence or word with just a few clicks. 
                        Whether you're a business person, traveler, or student, it is the perfect tool to help you communicate effectively in any language.
                    </Typography>
                </div>

                <div>
                    <TextField
                        id="EmailRequest"
                        label="Sentence/word will appear here ..."
                        fullWidth multiline
                        rows={6}
                        variant="filled"
                    />

                    <Stack 
                        direction="row" sx={{ paddingTop: 2 }}
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                        <Stack direction="row" spacing={2}>
                            <IconButton aria-label="Mic"><MicIcon /></IconButton>
                            <IconButton aria-label="Mic"><SkipNext /></IconButton>
                        </Stack>
                    </Stack>
                </div>

            </Stack>
        )
    }
}

export default Translate;