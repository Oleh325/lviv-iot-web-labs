import React from "react";
import { FooterContainer,
    FooterContent,
    FooterText,
    FooterTitle,
    FooterDescription,
    LogoPaw,
    FooterLogos,
    FooterSeparator,
    Copyrights }
from "./Footer.styled";
import Logo from "../Logo/Logo";
import logo_fb from "../../../images/logo_fb.png";
import logo_tw from "../../../images/logo_tw.png";
import logo_lk from "../../../images/logo_lk.png";
import logo_gp from "../../../images/logo_gp.png";
import logo from "../../../images/logo.png";

const Footer = () => {
    return(
        <FooterContainer>
            <FooterContent bgImage={logo} >
                <FooterText>
                    <FooterTitle>Branding stuff</FooterTitle>
                    <FooterDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo</FooterDescription>
                </FooterText>
                <LogoPaw src={logo} alt={"logo"} />
                <FooterLogos>
                    <Logo image={logo_fb} name="facebook" link="https://www.facebook.com/planespotter325" />
                    <Logo image={logo_tw} name="twitter" link="https://twitter.com/OlegYatskiv325" />
                    <Logo image={logo_lk} name="linkedin" link="https://www.linkedin.com/in/oleh-yatskiv-8746b820b/" />
                    <Logo image={logo_gp} name="googleplus" link="https://youtu.be/dQw4w9WgXcQ" />
                </FooterLogos>
            </FooterContent>
            <FooterSeparator />
            <Copyrights>2022 IoT © Copyright all rights reserved</Copyrights>
        </FooterContainer>
    );
}

export default Footer;