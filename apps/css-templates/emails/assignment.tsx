import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface AssignmentProps {
  assignerName: string;
  assignmentName: string;
  actionLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const AssignmentEmail = ({
  assignerName,
  assignmentName,
  actionLink,
}: AssignmentProps) => (
  <Html>
    <Head />
    <Preview>
      {assignerName} added you to {assignmentName}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/static/ret.png`}
            width="36"
            height="36"
            alt="React Email Template"
          />
          <Text style={description}>
            <b style={bold}>{assignerName}</b> added you to{" "}
            <b style={bold}>{assignmentName}</b>
          </Text>
          <Section style={buttonSection}>
            <Button style={button} href={actionLink}>
              View record
            </Button>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            React Email Templates, Suite 425 59431 Allen View, East Sherell, MT
            81789
          </Text>
          <Text style={footer}>
            You can adjust your{" "}
            <Link style={footerLink} href="https://example.com">
              email preferences
            </Link>{" "}
            any time, or{" "}
            <Link style={footerLink} href="https://example.com">
              unsubscribe
            </Link>{" "}
            of emails of this kind.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

AssignmentEmail.PreviewProps = {
  assignerName: "Margaret Hamilton",
  assignmentName: "Create an onboarding email",
  actionLink: "https://example.com",
} as AssignmentProps;

export default AssignmentEmail;

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

const description: React.CSSProperties = {
  marginTop: "24px",
  lineHeight: "28px",
  fontSize: "16px",
};

const bold: React.CSSProperties = { fontWeight: 600 };

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

const footer: React.CSSProperties = {
  color: "#71717a",
  fontSize: "14px",
  lineHeight: "20px",
  marginTop: "24px",
};

const footerLink: React.CSSProperties = {
  color: "#71717a",
  textDecoration: "underline",
  textUnderlineOffset: "4px",
  fontWeight: 600,
};
