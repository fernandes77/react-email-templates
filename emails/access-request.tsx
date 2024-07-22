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

interface CompanyAccessProps {
  name: string;
  email: string;
  message: string;
  avatar: string;
  actionLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const CompanyAccessEmail = ({
  avatar,
  email,
  message,
  name,
  actionLink,
}: CompanyAccessProps) => (
  <Html>
    <Head />
    <Preview>There is a new access request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="40"
            height="30"
            alt="React Email Template"
          />
          <Heading style={title}>{name} is requesting access</Heading>
          <Text style={description}>
            New access request with the following details:
          </Text>
          <Section style={avatarSection}>
            <Row>
              <Column align="center">
                <Img style={avatarStyle} src={avatar} width="64" height="64" />
              </Column>
            </Row>
          </Section>

          <Text>
            <ul style={{ paddingLeft: "1em" }}>
              <li style={listItem}>
                <b>Name:</b> {name || "Not provided"}
              </li>

              <li style={listItem}>
                <b>Email:</b> {email}
              </li>

              <li style={listItem}>
                <b>Message:</b> <Text style={messageStyle}>{message}</Text>
              </li>
            </ul>
          </Text>

          <Section style={buttonSection}>
            <Button style={button} href={actionLink}>
              Manage Permissions
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

CompanyAccessEmail.PreviewProps = {
  avatar: "https://randomuser.me/api/portraits/med/men/5.jpg",
  email: "johndoe@example.com",
  message:
    "Hi Admin, I would like to access the dashboard of our company Best Regards Inc.. If you find the time, please grant permissions to my account.",
  name: "John Doe",
  actionLink: "https://example.com",
} as CompanyAccessProps;

export default CompanyAccessEmail;

const main: React.CSSProperties = {
  backgroundColor: "#FBFBFB",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container: React.CSSProperties = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  borderRadius: "8px",
  border: "1px solid #e4e4e7",
};

const box: React.CSSProperties = {
  padding: "24px 24px 16px 24px",
};

const title: React.CSSProperties = {
  color: "#09090B",
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
  backgroundColor: "#18181b",
  color: "#fafafa",
  padding: "12px 16px",
};

const hr: React.CSSProperties = { marginTop: "24px" };

const listItem: React.CSSProperties = { marginTop: "16px" };

const messageStyle: React.CSSProperties = {
  marginTop: "16px",
  fontStyle: "italic",
  display: "inline",
};

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
