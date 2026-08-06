import { motion } from 'framer-motion';
import { PageHeader } from '@/components/PageHeader';
import { Container } from '@/components/layout/Container';
import { SEBI_REG, SEBI_REG_FULL, SUPPORT_EMAIL, GRIEVANCE_EMAIL, GRIEVANCE_PHONE, ADDRESS } from '@/constants/urls';

function LegalContent({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-navy-950 min-h-screen">
      <PageHeader title={title} badge="Legal" />
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 bg-navy-950" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto prose prose-invert prose-sm max-w-none"
          >
            {children}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export function PrivacyPolicyPage() {
  return (
    <LegalContent title="Privacy Policy">
      <p>Last updated: June 2025</p>
      <p>Vriddhi Research respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.</p>
      <h2>Information We Collect</h2>
      <p>We collect personal information that you voluntarily provide to us when you register on our website, subscribe to our services, fill out a form, or communicate with us. This may include your name, email address, phone number, and payment information.</p>
      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to provide and improve our services, communicate with you about your subscription, send educational content and market updates, and comply with legal obligations.</p>
      <h2>Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
      <h2>Contact</h2>
      <p>For any privacy-related concerns, contact us at {SUPPORT_EMAIL}.</p>
    </LegalContent>
  );
}

export function TermsPage() {
  return (
    <LegalContent title="Terms and Conditions">
      <p>Last updated: June 2025</p>
      <p>By accessing and using the Vriddhi Research website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.</p>
      <h2>Acceptance of Terms</h2>
      <p>By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.</p>
      <h2>Services</h2>
      <p>Vriddhi Research provides educational content, market research, and trading insights for informational and educational purposes only. Our services do not constitute investment advice or recommendations to buy or sell securities.</p>
      <h2>Disclaimer</h2>
      <p>Investment in securities market is subject to market risks. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
      <h2>Contact</h2>
      <p>For questions about these terms, contact us at {SUPPORT_EMAIL}.</p>
    </LegalContent>
  );
}

export function RefundPolicyPage() {
  return (
    <LegalContent title="Refund Policy">
      <p>Last updated: June 2025</p>
      <h2>General Refund Policy</h2>
      <p>All sales are final. However, refunds are issued for the unused portion of subscription as per SEBI guidelines. No refund will be provided for dissatisfaction with service quality during the paid period.</p>
      <h2>Cancellation</h2>
      <p>You may cancel your subscription at any time. Upon cancellation, you will retain access to the service until the end of the current billing period. No partial refunds are issued for the current period.</p>
      <h2>SEBI Compliance</h2>
      <p>All refund policies are in compliance with SEBI regulations governing Research Analyst services. For disputes related to refunds, you may contact the SEBI SCORES platform.</p>
      <h2>Contact</h2>
      <p>For refund-related queries, contact us at {SUPPORT_EMAIL} or call {GRIEVANCE_PHONE}.</p>
    </LegalContent>
  );
}

export function DisclaimerPage() {
  return (
    <LegalContent title="Disclaimer">
      <p>Vriddhi Research is managed by a SEBI Registered Research Analyst ({SEBI_REG_FULL}, SEBI Reg. No: {SEBI_REG}).</p>
      <p>Investment in securities market is subject to market risks. Read all related documents carefully before investing. Registration granted by SEBI and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.</p>
      <p>The content provided on this website and through our services is for educational and informational purposes only. It does not constitute investment advice, stock tips, or guaranteed returns. Past performance is not indicative of future results.</p>
      <p>Users should conduct their own research and consult with qualified financial advisors before making any investment decisions. Vriddhi Research shall not be held liable for any losses incurred as a result of using our services or content.</p>
    </LegalContent>
  );
}

export function DisclosurePage() {
  return (
    <LegalContent title="Disclosure">
      <p>Vriddhi Research is a research analyst business of {SEBI_REG_FULL} (SEBI Registration No: {SEBI_REG}).</p>
      <p>The research analyst holds NISM Series XV certification which is valid till perpetuity.</p>
      <h2>Terms and Conditions of Research Analyst</h2>
      <p>The Research Analyst has not been subject to any disciplinary action by SEBI.</p>
      <p>The Research Analyst has no pending litigation in connection with the research analyst activity.</p>
      <h2>Other Information</h2>
      <p>The research analyst or their associate has not received any compensation from the subject company in the past twelve months.</p>
      <p>For complete details, visit the SEBI registered research analyst disclosure on the Vriddhi Research website.</p>
    </LegalContent>
  );
}

export function GrievancePage() {
  return (
    <LegalContent title="Grievance Redressal">
      <h2>Grievance Redressal Officer</h2>
      <p>If you have any complaints or grievances regarding our services, please contact our Grievance Redressal Officer:</p>
      <p>Email: {GRIEVANCE_EMAIL}</p>
      <p>Phone: {GRIEVANCE_PHONE}</p>
      <p>Address: {ADDRESS}</p>
      <h2>SEBI SCORES</h2>
      <p>If you are not satisfied with our response, you may file a complaint on the SEBI SCORES platform at scores.gov.in.</p>
      <h2>ODR Portal</h2>
      <p>You may also use the Online Dispute Resolution (ODR) portal at smartodr.in for resolving disputes.</p>
    </LegalContent>
  );
}

export function OnboardDetailsPage() {
  return (
    <LegalContent title="Onboard Details">
      <h2>Vriddhi Research Onboard Details</h2>
      <p>Vriddhi Research is managed by {SEBI_REG_FULL}, a SEBI Registered Research Analyst.</p>
      <p>SEBI Registration Number: {SEBI_REG}</p>
      <p>NISM Certification: Series XV (Research Analyst) - Valid till perpetuity</p>
      <p>The research analyst provides research reports and trade recommendations for NIFTY 50, Bank Nifty, Sensex, and Fin Nifty options.</p>
    </LegalContent>
  );
}

export function RARegistrationPage() {
  return (
    <LegalContent title="RA Registration Disclosure">
      <h2>Research Analyst Registration Disclosure</h2>
      <p>Research Analyst Name: {SEBI_REG_FULL}</p>
      <p>SEBI Registration No: {SEBI_REG}</p>
      <p>NEAT Registration No: INZ000000000</p>
      <p>Terms and Conditions of Research Analyst are available on our website and will be provided to you before subscribing to our services.</p>
      <p>Grievance Redressal Officer: {GRIEVANCE_EMAIL}, {GRIEVANCE_PHONE}</p>
    </LegalContent>
  );
}

export function ODRPortalPage() {
  return (
    <LegalContent title="ODR Portal">
      <h2>Online Dispute Resolution Portal</h2>
      <p>The Online Dispute Resolution (ODR) Portal is a platform for resolving disputes between investors and intermediaries in the securities market.</p>
      <p>Visit: <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">smartodr.in</a></p>
    </LegalContent>
  );
}

export function UserKYCPage() {
  return (
    <LegalContent title="User KYC">
      <h2>User Know Your Customer (KYC)</h2>
      <p>Before subscribing to our premium research services, all users must complete the KYC process as required by SEBI regulations.</p>
      <p>The KYC process includes verification of identity and address through standard documentation.</p>
      <p>For KYC-related queries, contact us at {SUPPORT_EMAIL}.</p>
    </LegalContent>
  );
}

export function UserConsentPage() {
  return (
    <LegalContent title="User Consent">
      <h2>User Consent for Research Services</h2>
      <p>By subscribing to Vriddhi Research services, you acknowledge and consent to the following:</p>
      <p>1. Research recommendations are for educational purposes only and do not constitute investment advice.</p>
      <p>2. Investment in securities market is subject to market risks.</p>
      <p>3. Past performance is not indicative of future results.</p>
      <p>4. You have read and understood the terms and conditions, privacy policy, and disclaimer.</p>
    </LegalContent>
  );
}

export function ComplaintBoardPage() {
  return (
    <LegalContent title="Complaint Board">
      <h2>Complaint Board</h2>
      <p>Vriddhi Research is committed to addressing all complaints promptly and professionally.</p>
      <p>To file a complaint, please contact:</p>
      <p>Email: {GRIEVANCE_EMAIL}</p>
      <p>Phone: {GRIEVANCE_PHONE}</p>
      <p>Address: {ADDRESS}</p>
      <h2>Escalation</h2>
      <p>If you are not satisfied with the resolution, you may escalate to SEBI SCORES at scores.gov.in.</p>
    </LegalContent>
  );
}
