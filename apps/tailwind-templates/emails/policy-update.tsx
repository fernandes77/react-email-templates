import {
  Body,
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

interface PolicyUpdateProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const PolicyUpdateEmail = ({ name }: PolicyUpdateProps) => (
  <Html>
    <Head />
    <Preview>RET Policy Update</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>React Email Templates Update</Heading>
          <Text style={textBody}>Hi {name},</Text>
          <Text style={textBody}>
            We strive to make building emails with React a seamless and
            efficient experience.
          </Text>
          <Text style={textBody}>
            We've added clarifications to our{" "}
            <Link style={link} href="https://example.com">
              React Email Templates Policy
            </Link>
            . Because this is a clarification, our standards and practices for
            this policy remain the same.
          </Text>
          <Text style={textBody}>
            We’re noting exceptions to the{" "}
            <Link style={link} href="https://example.com">
              React Email Templates Policy
            </Link>
            , which can be found in our updated{" "}
            <Link style={link} href="https://example.com">
              Help Center article
            </Link>
            . These exceptions include private templates and templates that
            target specific email clients or formats and are bundled within the
            same package.
          </Text>
          <Text style={textBody}>
            We’re also extending the deadline to give you more time to adjust to
            these changes. Now, templates that rely on outdated methods will
            start experiencing reduced support starting Jan 31, 2023 instead of
            Nov 1, 2022. If you need more time to update your templates, you can
            request an extension to keep your templates functional for all users
            until May 1, 2023.
          </Text>
          <Text style={textBody}>
            Thank you,
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

PolicyUpdateEmail.PreviewProps = {
  name: "John",
} as PolicyUpdateProps;

export default PolicyUpdateEmail;

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

const textBody: React.CSSProperties = {
  marginTop: "8px",
  lineHeight: "28px",
  fontSize: "16px",
  color: "#09090b",
};

const link: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
