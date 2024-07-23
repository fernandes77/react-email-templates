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

interface NewDeviceLoginProps {
  name: string;
  loginMethod: string;
  location: string;
  device: string;
  time: string;
  ipAddress: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewDeviceLoginEmail = ({
  device,
  ipAddress,
  location,
  loginMethod,
  name,
  time,
}: NewDeviceLoginProps) => (
  <Html>
    <Head />
    <Preview>A new device logged into your account</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>
            Review a recent login from a new device
          </Heading>
          <Text style={description}>
            Hi {name},<br />
            There was a recent login to your RET account. Please review the
            details:
          </Text>
          <Text style={label}>Time</Text>
          <Text style={detail}>{time}</Text>
          <Text style={label}>Location</Text>
          <Text style={detail}>{location}</Text>
          <Text style={label}>Login Method</Text>
          <Text style={detail}>{loginMethod}</Text>
          <Text style={label}>Device</Text>
          <Text style={detail}>{device}</Text>
          <Text style={label}>Ip Address</Text>
          <Text style={detail}>{ipAddress}</Text>
          <Section style={{ marginTop: "24px" }}>
            <Text style={description}>
              If this was you, there's nothing else you need to do.
            </Text>
            <Text style={description}>
              If this wasn't you or if you have additional questions, please see
              our support page.
            </Text>
          </Section>
          <Section style={buttonSection}>
            <Button style={button} href="https://example.com">
              Learn More
            </Button>
          </Section>
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

NewDeviceLoginEmail.PreviewProps = {
  device: "Chrome on Mac OS X",
  ipAddress: "47.149.53.167",
  location: "Upland, California, United States",
  loginMethod: "Login with Google",
  name: "Jane",
  time: "September 7, 2022 at 10:58 AM",
} as NewDeviceLoginProps;

export default NewDeviceLoginEmail;

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

const description: React.CSSProperties = {
  margin: 0,
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
};

const label: React.CSSProperties = { fontWeight: 600, marginBottom: 0 };

const detail: React.CSSProperties = { margin: 0 };

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
  marginBottom: "24px",
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

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
