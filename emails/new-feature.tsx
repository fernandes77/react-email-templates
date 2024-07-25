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
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const NewFeatureEmail = () => (
  <Html>
    <Head />
    <Preview>RET Beta 1.0 is out!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>We've just released RET Beta 1.0</Heading>
          <Text style={textBody}>All of this is already available to you:</Text>
          <Section>
            <Row style={featureRow}>
              <Column width={60}>
                <Img
                  src={`${baseUrl}/static/mail-plus.png`}
                  width="36"
                  height="36"
                />
              </Column>
              <Column>
                <Text style={featureLabel}>Create emails</Text>
                <Text style={featureDescription}>
                  Create beautiful templates with React so that your team can
                  build with a familiar language.
                </Text>
              </Column>
            </Row>
            <Row style={featureRow}>
              <Column width={60}>
                <Img
                  src={`${baseUrl}/static/send.png`}
                  width="36"
                  height="36"
                />
              </Column>
              <Column>
                <Text style={featureLabel}>Send them</Text>
                <Text style={featureDescription}>
                  Use any email service provider: Resend, Nodemailer, SendGrid,
                  Postmark, AWS SES, Mailersend or Plunk. Your React email will
                  ultimately be an HTML file.
                </Text>
              </Column>
            </Row>
            <Row style={featureRow}>
              <Column width={60}>
                <Img
                  src={`${baseUrl}/static/mailbox.png`}
                  width="36"
                  height="36"
                />
              </Column>
              <Column>
                <Text style={featureLabel}>Email clients</Text>
                <Text style={featureDescription}>
                  They'll look great on most email clients. If your customer
                  receives a weird looking email, he's probably used to it
                  because he's using a terrible email client!
                </Text>
              </Column>
            </Row>
          </Section>
          <Section style={buttonSection}>
            <Button style={button} href="https://example.com">
              View new features
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

export default NewFeatureEmail;

const resetText: React.CSSProperties = { margin: 0 };

const featureLabel: React.CSSProperties = { ...resetText, fontWeight: 600 };

const featureDescription: React.CSSProperties = {
  ...resetText,
  color: "#71717a",
};

const featureRow: React.CSSProperties = { marginTop: "16px" };

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

const textBody: React.CSSProperties = {
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
  color: "#09090b",
};

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "32px",
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
