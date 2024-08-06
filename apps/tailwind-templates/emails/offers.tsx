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

export const OffersEmail = () => (
  <Html>
    <Head />
    <Preview>Limited time offers: up to 15% off</Preview>
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
            Limited time discounts on our products
          </Heading>
          <Text style={description}>
            If you're still on the fence about choosing our products, check out
            the offers below ⬇️
          </Text>
          <Link href="https://example.com">
            <Section style={offerCard}>
              <Row>
                <Column>
                  <Text style={offerProduct}>Template</Text>
                  <Text style={offerDescription}>A great template for you</Text>
                </Column>
                <Column align="right" width={70}>
                  <Text style={offerBadge}>5% OFF</Text>
                </Column>
              </Row>
            </Section>
          </Link>
          <Link href="https://example.com">
            <Section style={offerCard}>
              <Row>
                <Column>
                  <Text style={offerProduct}>Another Template</Text>
                  <Text style={offerDescription}>
                    An alternative to the product called Template
                  </Text>
                </Column>
                <Column align="right" width={70}>
                  <Text style={offerBadge}>10% OFF</Text>
                </Column>
              </Row>
            </Section>
          </Link>
          <Link href="https://example.com">
            <Section style={offerCard}>
              <Row>
                <Column>
                  <Text style={offerProduct}>Yet Another Template</Text>
                  <Text style={offerDescription}>
                    Another alternative to the product called Template
                  </Text>
                </Column>
                <Column align="right" width={70}>
                  <Text style={offerBadge}>15% OFF</Text>
                </Column>
              </Row>
            </Section>
          </Link>
          <Text style={description}>
            The offers will be available until August 10th 2024.
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

export default OffersEmail;

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

const offerCard: React.CSSProperties = {
  borderRadius: "8px",
  border: "1px solid #e4e4e7",
  boxShadow:
    "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  width: 292,
  padding: 16,
  marginTop: 16,
};

const offerProduct: React.CSSProperties = {
  ...resetText,
  fontWeight: 600,
  lineHeight: "28px",
  marginRight: 12,
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
};

const offerDescription: React.CSSProperties = {
  ...resetText,
  fontSize: 12,
  color: "#71717a",
  lineHeight: "16px",
  marginRight: 12,
};

const offerBadge: React.CSSProperties = {
  ...resetText,
  backgroundColor: "#18181b",
  color: "#fafafa",
  textAlign: "center",
  fontSize: 12,
  fontWeight: 700,
  borderRadius: 99,
};

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const hr: React.CSSProperties = { marginTop: "24px" };

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
