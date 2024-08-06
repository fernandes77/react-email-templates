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

interface B2BEventFollowUpProps {
  recipientName: string;
  recipientCompanyName: string;
  eventName: string;
  calendarLink: string;
  avatar: string;
  name: string;
  occupation: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const B2BEventFollowUpEmail = ({
  eventName,
  avatar,
  calendarLink,
  recipientName,
  recipientCompanyName,
  name,
  occupation,
}: B2BEventFollowUpProps) => (
  <Html>
    <Head />
    <Preview>Nice meeting you at {eventName}!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Section>
            <Row>
              <Column width={80}>
                <Img style={avatarStyle} src={avatar} width="64" height="64" />
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
            It was really nice to meet you at {eventName}! I loved learning more
            about {recipientCompanyName}.
          </Text>
          <Text style={description}>
            Here's how React Email Templates Inc. can help you achieve your
            goals:
          </Text>
          <Text style={description}>
            <ul style={list}>
              <li style={listItem}>
                Build emails with React that will help you move faster
              </li>
              <li style={listItem}>
                Give you 50 email templates that you can copy and paste into
                your application and make changes accordingly
              </li>
              <li style={listItem}>Send emails to any email client </li>
            </ul>
          </Text>
          <Text style={description}>
            We agreed to schedule a call to discuss the conditions of our
            collaboration.
          </Text>
          <Text style={description}>
            Here's a{" "}
            <Link href={calendarLink} style={link}>
              link to my calendar
            </Link>{" "}
            or feel free to send me yours.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            {name}
            <br />
            {occupation} at RET Team
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

B2BEventFollowUpEmail.PreviewProps = {
  avatar: "https://randomuser.me/api/portraits/men/74.jpg",
  calendarLink: "https://example.com",
  eventName: "Inbox Conference",
  name: "Alan Turing",
  occupation: "CEO",
  recipientCompanyName: "Best Regards Inc.",
  recipientName: "John",
} as B2BEventFollowUpProps;

export default B2BEventFollowUpEmail;

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

const list: React.CSSProperties = { margin: "16px 0" };

const listItem: React.CSSProperties = { marginTop: "8px" };

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
