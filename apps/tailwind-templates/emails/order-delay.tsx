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
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface OrderDelayProps {
  oldDate: string;
  newDate: string;
  trackingLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const OrderDelayEmail = ({
  newDate,
  oldDate,
  trackingLink,
}: OrderDelayProps) => (
  <Html>
    <Head />
    <Preview>Delay in shipping your order</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Delay in delivering your order</Heading>
          <Text style={description}>
            We wanted to inform you that there has been a delay in the delivery
            of your recent order. We sincerely apologize for the inconvenience
            this may have caused you.
          </Text>
          <Text style={subHeading}>Delivery changes</Text>
          <Section style={datesRow}>
            <Row width={300}>
              <Column>
                <Section>
                  <Row>
                    <Column width={56}>
                      <Img
                        src={`${baseUrl}/static/calendar-x.png`}
                        width="36"
                        height="36"
                      />
                    </Column>
                    <Column>
                      <Text style={dateLabel}>{oldDate}</Text>
                      <Text style={dateDesc}>Old date</Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
              <Column align="center" width={44}>
                <Img
                  src={`${baseUrl}/static/arrow.png`}
                  width="12"
                  height="9"
                />
              </Column>
              <Column>
                <Section>
                  <Row>
                    <Column width={56}>
                      <Img
                        src={`${baseUrl}/static/calendar-check.png`}
                        width="36"
                        height="36"
                      />
                    </Column>
                    <Column>
                      <Text style={dateLabel}>{newDate}</Text>
                      <Text style={dateDesc}>New date</Text>
                    </Column>
                  </Row>
                </Section>
              </Column>
            </Row>
          </Section>
          <Section style={buttonSection}>
            <Button style={button} href={trackingLink}>
              Track order
            </Button>
          </Section>
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

OrderDelayEmail.PreviewProps = {
  newDate: "7/28/2024",
  oldDate: "7/26/2024",
  trackingLink: "https://example.com",
} as OrderDelayProps;

export default OrderDelayEmail;

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

const datesRow: React.CSSProperties = { marginTop: "24px" };

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const resetText: React.CSSProperties = { margin: 0 };

const dateLabel: React.CSSProperties = {
  ...resetText,
  fontWeight: 600,
};

const dateDesc: React.CSSProperties = {
  ...resetText,
  color: "#71717a",
};

const subHeading: React.CSSProperties = {
  ...resetText,
  fontSize: "20px",
  marginTop: "24px",
  fontWeight: 600,
};

const buttonSection: React.CSSProperties = {
  textAlign: "center",
  marginTop: "24px",
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

const hr: React.CSSProperties = { marginTop: "24px" };

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "16px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
