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

interface ReferralProps {
  name: string;
  discount: string;
  codeLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const ReferralEmail = ({ name, discount, codeLink }: ReferralProps) => (
  <Html>
    <Head />
    <Preview>Refer our product and gain {discount} off</Preview>
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
            Invite people to RET and gain {discount} off
          </Heading>
          <Text style={description}>
            Hi, {name}. Did you know you can save even more money by referring
            our product to other businesses?
          </Text>
          <Text style={description}>
            Send them your promo code and enjoy <b style={bold}>{discount}</b>{" "}
            off.
          </Text>
          <Text style={comment}>
            It's a win-win for everybody. RET saves a ton of time for my CEO
            friends and I get to enjoy RET at my company for a fraction of the
            price.
          </Text>
          <Text style={description}>- Linus, CEO of Linux Inc.</Text>
          <Section style={buttonSection}>
            <Button style={button} href={codeLink}>
              Get Promo Code
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

ReferralEmail.PreviewProps = {
  name: "Alan",
  discount: "20%",
  codeLink: "https://example.com",
} as ReferralProps;

export default ReferralEmail;

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

const bold: React.CSSProperties = { fontWeight: 600 };

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

const comment: React.CSSProperties = {
  marginTop: "24px",
  borderLeft: "2px solid #e4e4e7",
  paddingLeft: "24px",
  fontStyle: "italic",
  lineHeight: "24px",
  fontSize: "16px",
};

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
