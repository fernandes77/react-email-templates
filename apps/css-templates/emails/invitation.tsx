import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface InvitationProps {
  actionLink: string;
  inviterName: string;
  inviterAvatar: string;
  teamName: string;
  logo: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const InvitationEmail = ({
  actionLink,
  inviterAvatar,
  logo,
  teamName,
  inviterName,
}: InvitationProps) => (
  <Html>
    <Head />
    <Preview>You have a new invite</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Join {inviterName} on RET</Heading>
          <Text style={description}>
            {inviterName} has invited you to collaborate with {teamName}.
          </Text>
          <Section style={avatarSection}>
            <Row>
              <Column align="right">
                <Img
                  style={avatarStyle}
                  src={inviterAvatar}
                  width="64"
                  height="64"
                />
              </Column>
              <Column align="center">
                <Img
                  src={`${baseUrl}/static/arrow.png`}
                  width="12"
                  height="9"
                />
              </Column>
              <Column align="left">
                <Img style={avatarStyle} src={logo} width="64" height="64" />
              </Column>
            </Row>
          </Section>
          <Section style={buttonSection}>
            <Button style={button} href={actionLink}>
              Join Now
            </Button>
          </Section>
          <Text style={safeguard}>
            If you were not expecting this invitation, you can ignore this
            email.
          </Text>
          <Hr />
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

InvitationEmail.PreviewProps = {
  actionLink: "https://example.com",
  inviterAvatar: "https://randomuser.me/api/portraits/med/women/32.jpg",
  logo: `${baseUrl}/static/ret-padding.png`,
  teamName: "BestRegards Team",
  inviterName: "Margaret Hamilton",
} as InvitationProps;

export default InvitationEmail;

const main: React.CSSProperties = {
  backgroundColor: "#fafafa",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "8px",
  border: "1px solid #e4e4e7",
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
};

const box: React.CSSProperties = {
  padding: "24px 24px 16px 24px",
};

const title: React.CSSProperties = {
  color: "#09090b",
  fontSize: "24px",
  fontWeight: "bold",
  padding: "0",
  marginTop: "32px",
};

const avatarSection: React.CSSProperties = { marginTop: "24px" };

const avatarStyle: React.CSSProperties = { borderRadius: "99%" };

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
};

const button: React.CSSProperties = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  whiteSpace: "nowrap",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600",
  backgroundColor: "#18181B",
  color: "#fafafa",
  padding: "12px 16px",
};

const safeguard: React.CSSProperties = { color: "#71717a", marginTop: "24px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
