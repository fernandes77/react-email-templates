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

interface InterviewProps {
  name: string;
  position: string;
  when: string;
  link: string;
  guests: string[];
  hiringManagerName: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const InterviewEmail = ({
  name,
  when,
  position,
  link,
  hiringManagerName,
  guests,
}: InterviewProps) => (
  <Html>
    <Head />
    <Preview>Interview Invitation for {position} at RET</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Heading style={title}>Dear {name},</Heading>
          <Text style={description}>
            I hope this message finds you well. We are pleased to inform you
            that you have been selected to proceed to the interview stage for
            the {position} role at RET. We were impressed with your application
            and are excited to learn more about your qualifications and how they
            align with our team.
          </Text>
          <Heading style={title}>Interview details</Heading>
          <Text style={label}>When</Text>
          <Text style={detail}>{when}</Text>
          <Text style={label}>Meeting Link</Text>
          <Text style={detail}>
            <Link style={linkStyle} href={link}>
              {link}
            </Link>
          </Text>
          <Text style={label}>Guests</Text>
          <Text style={detail}>{guests.join(", ")}</Text>
          <Text style={description}>
            During the interview, you will have the opportunity to discuss your
            experience in more detail and meet with key members of our team. We
            will also be happy to answer any questions you may have about the
            role and our company.
          </Text>
          <Text style={description}>
            Please confirm your availability by replying to this email at your
            earliest convenience. If the proposed time does not work for you,
            let us know, and we will do our best to accommodate an alternative
            time.
          </Text>
          <Text style={signOff}>
            Best,
            <br />
            {hiringManagerName}
            <br />
            Hiring Manager at RET Team
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

InterviewEmail.PreviewProps = {
  name: "Ken Thomson",
  position: "Full-Stack Developer",
  when: "Saturday, 10 Aug 2024 | 10:00 AM - 11:00 AM",
  link: "https://meet.google.com/tem-pla-tes",
  hiringManagerName: "Linus Torvalds",
  guests: ["ken.thomson@example.com", "linus.torvalds@example.com"],
} as InterviewProps;

export default InterviewEmail;

const label: React.CSSProperties = { fontWeight: 600, marginBottom: 0 };

const detail: React.CSSProperties = { margin: 0 };

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
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const linkStyle: React.CSSProperties = {
  color: "#09090b",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};

const hr: React.CSSProperties = { marginTop: "24px" };

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};

const signOff: React.CSSProperties = { color: "#71717a", marginTop: "24px" };
