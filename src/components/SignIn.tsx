import React from "react";
import CopyrightFooter from "./CopyrightFooter";
import AccountBoxOutlined from '@material-ui/icons/AccountBoxOutlined';
import {Avatar, Box, Container, CssBaseline, Typography} from "@material-ui/core";
import SignInForm from "./SignInForm";

export class SignIn extends React.Component {
    render() {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div>
                    <Avatar>
                        <AccountBoxOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <SignInForm />
                </div>
                <Box mt={8}>
                    <CopyrightFooter/>
                </Box>
            </Container>
        )
    }
}

export default SignIn;
