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

interface JobOfferProps {
  name: string;
  position: string;
  salary: string;
  startDate: string;
  workHours: string;
  hiringManagerName: string;
  hiringManagerEmail: string;
  deadlineDate: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const JobOfferEmail = ({
  name,
  deadlineDate,
  hiringManagerEmail,
  hiringManagerName,
  position,
  salary,
  startDate,
  workHours,
}: JobOfferProps) => (
  <Html>
    <Head />
    <Preview>Job Offer from RET</Preview>
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
            Congratulations! We are excited to offer you a full-time position as
            a <b style={bold}>{position}</b> at RET. Based on your experience
            and portfolio, we look forward to seeing how you take our product to
            the next level.
          </Text>
          <Text style={description}>
            We'd like to offer you an annual starting salary of{" "}
            <b style={bold}>{salary}</b> paid out on a semimonthly basis via
            direct deposit.
          </Text>
          <Heading style={title}>If you decide to accept this role</Heading>
          <Text style={description}>
            <ul style={list}>
              <li style={listItem}>
                Your anticipated start date will be{" "}
                <b style={bold}>{startDate}</b>.
              </li>
              <li style={listItem}>
                You will be expected to work <b style={bold}>{workHours}</b>.
              </li>
              <li style={listItem}>
                Please find attached an updated copy of the job description to
                familiarize yourself with some of the position's duties and
                responsibilities.
              </li>
            </ul>
          </Text>
          <Text style={description}>
            As an employee of RET, you will also have access to our
            comprehensive benefits program, which includes:
          </Text>
          <Section>
            <Row style={benefitRow}>
              <Column width={60}>
                <Img
                  src={`${baseUrl}/static/vacation.png`}
                  width="36"
                  height="36"
                />
              </Column>
              <Column>
                <Text style={benefitLabel}>Unlimited PTO</Text>
                <Text style={benefitDescription}>
                  Take time off for other things in life. Our work culture is
                  balanced so that it is sustainable.
                </Text>
              </Column>
            </Row>
            <Row style={benefitRow}>
              <Column width={60}>
                <Img
                  src={`${baseUrl}/static/health.png`}
                  width="36"
                  height="36"
                />
              </Column>
              <Column>
                <Text style={benefitLabel}>Health Insurance</Text>
                <Text style={benefitDescription}>
                  We've got you covered. Don't worry about medical bills
                  anymore.
                </Text>
              </Column>
            </Row>
            <Row style={benefitRow}>
              <Column width={60}>
                <Img src={`${baseUrl}/static/gym.png`} width="36" height="36" />
              </Column>
              <Column>
                <Text style={benefitLabel}>Gym Stipend</Text>
                <Text style={benefitDescription}>
                  Take care of your body. A sharp mind and a sharp body go
                  together.
                </Text>
              </Column>
            </Row>
          </Section>
          <Text style={description}>
            I have attached the full details of the offer for you to look over.
          </Text>
          <Text style={description}>
            To accept this offer, please email me at{" "}
            <Link style={link} href={`mailto:${hiringManagerEmail}`}>
              {hiringManagerEmail}
            </Link>{" "}
            by <b style={bold}>{deadlineDate}</b> and I will get you started
            with the rest of the onboarding process.
          </Text>
          <Text style={description}>
            We are excited about the possibility of you joining RET! If you have
            any questions, please contact me via phone or email.
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

JobOfferEmail.PreviewProps = {
  name: "Ken Thomson",
  deadlineDate: "August 1, 2024",
  hiringManagerEmail: "linus.torvalds@example.com",
  hiringManagerName: "Linus Torvalds",
  position: "Full-Stack Developer",
  salary: "$120,000",
  startDate: "August 10, 2024",
  workHours: "40 hours per week",
} as JobOfferProps;

export default JobOfferEmail;

const resetText: React.CSSProperties = { margin: 0 };

const benefitLabel: React.CSSProperties = { ...resetText, fontWeight: 600 };

const benefitDescription: React.CSSProperties = {
  ...resetText,
  color: "#71717a",
};

const benefitRow: React.CSSProperties = { marginTop: "16px" };

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

const bold: React.CSSProperties = { fontWeight: 600 };

const list: React.CSSProperties = { margin: "16px 0" };

const listItem: React.CSSProperties = { marginTop: "8px", lineHeight: "28px" };

const link: React.CSSProperties = {
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
