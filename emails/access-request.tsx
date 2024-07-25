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
            width="36"
            height="36"
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
          <Text style={label}>Name</Text>
          <Text style={detail}>{name}</Text>
          <Text style={label}>Email</Text>
          <Text style={detail}>{email}</Text>
          <Text style={label}>Message</Text>
          <Text style={detail}>{message}</Text>

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
  email: "johnvonneumann@example.com",
  message:
    "Hi Admin, I would like to access the dashboard of our company Best Regards Inc.. If you find the time, please grant permissions to my account.",
  name: "John Von Neumann",
  actionLink: "https://example.com",
} as CompanyAccessProps;

export default CompanyAccessEmail;

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

const label: React.CSSProperties = { fontWeight: 600, marginBottom: 0 };

const detail: React.CSSProperties = { margin: 0 };

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

const hr: React.CSSProperties = { marginTop: "24px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
