import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ResetPasswordProps {
  loginLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ResetPasswordEmail = ({ loginLink }: ResetPasswordProps) => (
  <Html>
    <Head />
    <Preview>Click this link to reset your password</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="40"
            height="30"
            alt="React Email Template"
          />
          <Heading style={title}>Reset your password</Heading>
          <Text style={description}>
            We've received a request to reset your password for your account on
            RET.
            <br />
            To proceed with the password reset, please click the link below.
          </Text>
          <Section style={buttonSection}>
            <Button style={button} href={loginLink}>
              Reset password
            </Button>
          </Section>
          <Text style={safeguard}>
            If you didn&apos;t request this, you can safely ignore this email.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            RET Team
          </Text>
          <Hr style={{ marginBottom: "24px" }} />
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

ResetPasswordEmail.PreviewProps = {
  loginLink: "https://example.com",
} as ResetPasswordProps;

export default ResetPasswordEmail;

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

const description: React.CSSProperties = {
  marginTop: "8px",
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

const safeguard: React.CSSProperties = { color: "#71717a", marginTop: "24px" };

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "12px",
  marginBottom: "24px",
};
