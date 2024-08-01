import {
  Body,
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

interface ServersDownProps {
  name: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ServersDownEmail = ({ name }: ServersDownProps) => (
  <Html>
    <Head />
    <Preview>Our services are currently down</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Sorry. We're working on it.</Heading>
          <Text style={description}>Hi {name},</Text>
          <Text style={description}>
            I'm sorry about this problem. Our team is exploring this issue now.
            I just want to let you know that this issue is important to us, and
            we'll get back to you ASAP when we're back online.
          </Text>
          <Section style={img}>
            <Row>
              <Column align="center">
                <Img
                  src={`${baseUrl}/static/cat-working.gif`}
                  height={150}
                  alt="Walking duck"
                />
              </Column>
            </Row>
          </Section>
          <Text style={description}>
            You can{" "}
            <Link style={link} href="https://example.com">
              click here
            </Link>{" "}
            to check out current status.
          </Text>
          <Text style={description}>Thanks for your patience.</Text>
          <Text style={signOff}>
            Best,
            <br />
            Alex Pereira, CEO at RET
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

ServersDownEmail.PreviewProps = {
  name: "Alan",
} as ServersDownProps;

export default ServersDownEmail;

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

const img: React.CSSProperties = { margin: "24px 0" };

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
