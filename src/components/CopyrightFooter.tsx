import React from "react";
import {Typography, Link} from "@material-ui/core";

export class CopyrightFooter extends React.Component {
    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://mertturkmenoglu.github.io/">
                    Mert Turkmenoglu
                </Link>
                {' '}
                {new Date().getFullYear()}
            </Typography>
        )
    }
}

export default CopyrightFooter;
