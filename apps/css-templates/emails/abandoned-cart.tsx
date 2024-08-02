import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AbandonedCartProps {
  productName: string;
  customerName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AbandonedCartEmail = ({
  customerName,
  productName,
}: AbandonedCartProps) => (
  <Html>
    <Head />
    <Preview>Hey {customerName}, you've left something behind...</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>We saved your shopping bag!</Heading>
          <Text style={description}>
            Recently, you've come across our <b style={bold}>{productName}</b>{" "}
            but haven't decided to purchase it. We've saved your session so that
            you can return when you're ready. If you need help, please{" "}
            <Link style={link} href="https://example.com">
              contact us
            </Link>
            .
          </Text>
          <Section style={buttonSection}>
            <Button style={button} href="https://example.com">
              Continue with your order
            </Button>
          </Section>
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

AbandonedCartEmail.PreviewProps = {
  customerName: "Alan",
  productName: "Enterprise Plan",
} as AbandonedCartProps;

export default AbandonedCartEmail;

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

const description: React.CSSProperties = {
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
};

const bold: React.CSSProperties = { fontWeight: 600 };

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
  marginBottom: "16px",
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

const link: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
