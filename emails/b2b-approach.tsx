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

interface B2BApproachProps {
  recipientName: string;
  callDate: string;
  calendarLink: string;
  salesPersonName: string;
  salesPersonOccupation: string;
  salesPersonAvatar: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const B2BApproachEmail = ({
  salesPersonName,
  salesPersonOccupation,
  salesPersonAvatar,
  calendarLink,
  callDate,
  recipientName,
}: B2BApproachProps) => (
  <Html>
    <Head />
    <Preview>There is a new access request</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Section>
            <Row>
              <Column width={80}>
                <Img
                  style={avatarStyle}
                  src={salesPersonAvatar}
                  width="64"
                  height="64"
                />
              </Column>
              <Column>
                <Img
                  src={`${baseUrl}/static/ret.png`}
                  width="36"
                  height="36"
                  alt="React Email Template"
                />
              </Column>
            </Row>
          </Section>
          <Heading style={title}>Hi {recipientName},</Heading>
          <Text style={description}>
            I see you're having a lot of success. Congratulations!
          </Text>
          <Text style={description}>
            I thought you might be interested to know how we helped a similar
            company{" "}
            <Link href="https://example.com" style={link}>
              achieve these results
            </Link>
            .
          </Text>
          <Text style={description}>
            I know things must be crazy going on at your company right now, but
            if you'd like to know more, let's make a quick call.
          </Text>
          <Text style={description}>
            How does <b style={bold}>{callDate}</b> look on your calendar?
            Alternatively, here's a{" "}
            <Link href={calendarLink} style={link}>
              link to my calendar
            </Link>{" "}
            or feel free to send me yours.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            {salesPersonName}
            <br />
            {salesPersonOccupation} at RET Team
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

B2BApproachEmail.PreviewProps = {
  recipientName: "John",
  calendarLink: "https://example.com",
  callDate: "August 10, Saturday",
  salesPersonAvatar: "https://randomuser.me/api/portraits/women/90.jpg",
  salesPersonName: "Margaret Hamilton",
  salesPersonOccupation: "Marketing Manager",
} as B2BApproachProps;

export default B2BApproachEmail;

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

const bold: React.CSSProperties = { fontWeight: 600 };

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const link: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const avatarStyle: React.CSSProperties = { borderRadius: "99%" };

const hr: React.CSSProperties = { marginTop: "24px" };

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "24px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};
