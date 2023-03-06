import { Component } from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';


class Email extends Component {
    state = {
        data: [],
    };

    // Code is invoked after the component is mounted/inserted into the DOM tree.
    componentDidMount() {
        const url =
        'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'

        fetch(url)
        .then((result) => result.json())
        .then((result) => {
            this.setState({
                data: result,
            })
        })
    };

    ComposeEmail = () => {
        console.log("v");
    };

    render() {
        return (
            <Stack spacing={4}>
                <div>
                    <Typography variant="subtitle1 h2" component="h2" gutterBottom>
                        Email App
                    </Typography>

                    <Typography variant="body1" component="h2" gutterBottom>
                        A writing assistant designed to help users compose emails quickly and efficiently. The app help users find the right words 
                        and phrases to express their ideas clearly and concisely to make emails look professional and polished.
                    </Typography>
                </div>
                <TextField
                    id="filled-multiline-static"
                    label="Write your message"
                    fullWidth multiline
                    rows={6}
                    variant="filled"
                />

                <div>
                    <Button variant="contained" endIcon={<SendIcon />} onClick={this.ComposeEmail}>Compose</Button>
                </div>

            </Stack>
        )
    }
};

export default Email;