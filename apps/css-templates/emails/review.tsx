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

interface ResetPasswordProps {
  name: string;
  reviewLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ResetPasswordEmail = ({
  name,
  reviewLink,
}: ResetPasswordProps) => (
  <Html>
    <Head />
    <Preview>{name}, your opinion is important!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Leave your review</Heading>
          <Text style={description}>
            {name}, do you have a moment? We would like to know if everything
            went well for you. Take a moment to review our product.
          </Text>
          <Section style={starsSection}>
            <Row>
              <Column align="center">
                <Link href={reviewLink}>
                  {Array(5)
                    .fill(0)
                    .map((_, index) => (
                      <Img
                        key={index}
                        src={`${baseUrl}/static/star.gif`}
                        alt="Amazon Rating"
                        style={rating}
                      />
                    ))}
                </Link>
              </Column>
            </Row>
          </Section>
          <Text style={description}>
            Your reviews will be posted on RET using your public name.
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

ResetPasswordEmail.PreviewProps = {
  name: "Alan",
  reviewLink: "https://example.com",
} as ResetPasswordProps;

export default ResetPasswordEmail;

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

const rating: React.CSSProperties = { display: "inline-block" };

const starsSection: React.CSSProperties = {
  margin: "24px 0",
};

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
