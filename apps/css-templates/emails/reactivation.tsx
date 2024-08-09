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

interface ReactivationProps {
  name: string;
  actionLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ReactivationEmail = ({ name, actionLink }: ReactivationProps) => (
  <Html>
    <Head />
    <Preview>We miss you! Reactivate your RET subscription today</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Dear {name},</Heading>
          <Text style={description}>
            We noticed that you've recently deactivated your subscription with
            RET, and we wanted to reach out because we value your business and
            would love to have you back.
          </Text>
          <Heading style={title}>Why reactivate?</Heading>
          <ul style={list}>
            <li style={listItem}>
              <b style={bold}>Full Access</b>: Instantly regain access to our
              entire library of customizable templates.
            </li>
            <li style={listItem}>
              <b style={bold}>Exclusive Updates</b>: Stay updated with the
              latest changes in email development and new templates.
            </li>
            <li style={listItem}>
              <b style={bold}>Customer Support</b>: Enjoy our top-notch customer
              support, ready to assist you with any questions.
            </li>
          </ul>
          <Heading style={title}>Special offer</Heading>
          <Text style={description}>
            Reactivate your subscription within the next 10 days and enjoy{" "}
            <b style={bold}>20% off for the first month</b> as a token of our
            appreciation.
          </Text>
          <Section style={buttonSection}>
            <Button style={button} href={actionLink}>
              Reactivate my subscription
            </Button>
          </Section>
          <Text style={description}>
            If you have any questions or need assistance with reactivating your
            subscription, please don't hesitate to reach out. We're here to help
            and look forward to welcoming you back.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            RET Team
          </Text>
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

ReactivationEmail.PreviewProps = {
  name: "Ken Thomson",
  actionLink: "https://example.com",
} as ReactivationProps;

export default ReactivationEmail;

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
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

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

const bold: React.CSSProperties = { fontWeight: 600 };

const list: React.CSSProperties = { margin: "16px 0" };

const listItem: React.CSSProperties = { marginTop: "8px", lineHeight: "28px" };

const hr: React.CSSProperties = { marginTop: "24px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "24px" };
