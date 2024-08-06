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

interface TrialEndingProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const TrialEndingEmail = ({ name }: TrialEndingProps) => (
  <Html>
    <Head>
      <style>
        {`@media screen and (max-width: 600px) {
                .content {
                    width: 100% !important;
                    display: block !important;
                    padding: 10px !important;
                }
                .header, .body, .footer {
                    padding: 20px !important;
                }
            }`}
      </style>
    </Head>
    <Preview>Your RET trial is ending soon</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Your RET trial is ending soon</Heading>
          <Text style={description}>Hi {name},</Text>
          <Text style={description}>
            Time flies when you're having fun, right?
          </Text>
          <Text style={description}>
            It seems like just yesterday you started your RET free trial, but we
            wanted to let you know that it's ending soon. We love having you on
            board, and we don't want you to miss out on all the fantastic
            features our platform has to offer.
          </Text>
          <Text style={description}>
            If you've enjoyed your time with RET, why not upgrade to one of our
            subscription plans? We have a variety of options tailored to
            businesses of all sizes, so you're sure to find one that fits your
            needs.
          </Text>
          <Section style={planCard}>
            <Heading style={planTitle}>Pro</Heading>
            <Text style={planDesc}>
              Enjoy pro features for <b style={bold}>$20 / month</b>
            </Text>
            <Section style={buttonCenter}>
              <Button href="https://example.com" style={button}>
                See features
              </Button>
            </Section>
          </Section>
          <Section style={planCard}>
            <Heading style={planTitle}>Enterprise</Heading>
            <Text style={planDesc}>
              Critical security, performance, observability and support
            </Text>
            <Section style={buttonCenter}>
              <Button href="https://example.com" style={button}>
                Contact sales
              </Button>
            </Section>
          </Section>
          <Text style={signOff}>
            Best,
            <br />
            RET team
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

TrialEndingEmail.PreviewProps = {
  name: "Alan",
} as TrialEndingProps;

export default TrialEndingEmail;

const resetText: React.CSSProperties = { margin: 0 };

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

const bold: React.CSSProperties = { fontWeight: 600, color: "#09090b" };

const planCard: React.CSSProperties = {
  marginTop: "16px",
  marginBottom: "16px",
  width: 280,
  padding: 24,
  borderRadius: "8px",
  border: "1px solid #e4e4e7",
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
};

const planTitle: React.CSSProperties = { ...resetText, fontSize: "24px" };

const planDesc: React.CSSProperties = {
  ...resetText,
  color: "#71717a",
  lineHeight: "20px",
  marginTop: "4px",
};

const buttonCenter: React.CSSProperties = {
  textAlign: "center",
  marginTop: "16px",
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
