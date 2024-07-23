import {
  Body,
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

interface OneTimePasswordProps {
  code: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const OneTimePasswordEmail = ({ code }: OneTimePasswordProps) => (
  <Html>
    <Head />
    <Preview>Your RET login code</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="40"
            height="30"
            alt="React Email Template"
          />
          <Heading style={title}>Here's your RET login code</Heading>
          <Text style={description}>
            Continue signing in to RET by entering the code below:
          </Text>
          <Section style={codeContainer}>
            <Text style={codeStyle}>{code}</Text>
          </Section>
          <Text style={safeguard}>
            If you didn&apos;t request this, contact us at support@example.com.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            RET Team
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

OneTimePasswordEmail.PreviewProps = {
  code: "481516",
} as OneTimePasswordProps;

export default OneTimePasswordEmail;

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
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
};

const codeContainer: React.CSSProperties = {
  background: "#F2F2F1",
  borderRadius: "4px",
  verticalAlign: "middle",
  width: "280px",
  marginTop: "24px",
};

const codeStyle: React.CSSProperties = {
  color: "#09090b",
  display: "inline-block",
  fontSize: "32px",
  fontWeight: 700,
  letterSpacing: "6px",
  lineHeight: "40px",
  paddingBottom: "8px",
  paddingTop: "8px",
  margin: 0,
  width: "100%",
  textAlign: "center",
};

const safeguard: React.CSSProperties = { color: "#71717a", marginTop: "24px" };

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
