import styled from "styled-components";
import { Title, SubTitle, Text } from "./Terms";

const PrivacyText = styled.div`
  padding-bottom: 100px;
`;

export default function PrivacyComponent({ id }) {
  return (
    <PrivacyText id={id}>
      <Title>Privacy Policy</Title>
      <SubTitle>OVERVIEW</SubTitle>
      <Text>
        This privacy notice discloses the privacy practices for
        www.Expetitle.com. This privacy notice applies solely to information
        collected by this website. It will notify you of the following:
        <br />
      </Text>
      <Text>
        What personally identifiable information is collected from you through
        the website, how it is used and with whom it may be shared.
        <br />
      </Text>
      <Text>
        What choices are available to you regarding the use of your data.
        <br />
      </Text>
      <Text>
        The security procedures in place to protect the misuse of your
        information.
        <br />
      </Text>
      <Text>
        How you can correct any inaccuracies in the information.
        <br />
      </Text>
      <Text>
        SECTION 1 - INFORMATION COLLECTION, USE, AND SHARING
        <br />
      </Text>
      <Text>
        We are the sole owners of the information collected on this site. We
        only have access to/collect information that you voluntarily give us via
        email or other direct contact from you. We will not sell or rent this
        information to anyone.
        <br />
      </Text>
      <Text>
        We will use your information to respond to you, regarding the reason you
        contacted us. We will not share your information with any third party
        outside of our organization, other than as necessary to fulfill your
        request.
        <br />
      </Text>
      <Text>
        Some of our third-party applications may use cookies on our site (for
        example, advertisers and chat solutions). However, we have no access to
        or control over these cookies.
        <br />
      </Text>
      <Text>
        This website contains links to other sites. Please be aware that we are
        not responsible for the content or privacy practices of such other
        sites. We encourage our users to be aware when they leave our site and
        to read the privacy statements of any other site that collects
        personally identifiable information.
        <br />
      </Text>
      <Text>
        From time-to-time our site requests information via surveys.
        Participation in these surveys or contests is completely voluntary and
        you may choose whether or not to participate and therefore disclose this
        information. Survey information will be used for purposes of monitoring
        or improving the use and satisfaction of this site.
        <br />
      </Text>
      <Text>
        Unless you ask us not to, we may contact you via email in the future to
        tell you about specials, new products or services, or changes to this
        privacy policy.
        <br />
      </Text>
      <Text>
        SECTION 2 - YOUR ACCESS TO AND CONTROL OVER INFORMATION
        <br />
      </Text>
      <Text>
        You may opt out of any future contacts from us at any time. You can do
        the following at any time by contacting us via the email address or
        phone number given on our website:
        <br />
      </Text>
      <Text>
        See what data we have about you, if any.
        <br />
      </Text>
      <Text>
        Change/correct any data we have about you.
        <br />
      </Text>
      <Text>
        Have us disable any data we have about you. Upon request, we can delete
        any data we have about you on 7-days notice.
        <br />
      </Text>
      <Text>
        Express any concern you have about our use of your data.
        <br />
      </Text>
      <Text>
        SECTION 3 - SECURITY
        <br />
      </Text>
      <Text>
        We take precautions to protect your information. When you submit
        sensitive information via the website, your information is protected
        both online and offline.
        <br />
      </Text>
      <Text>
        Wherever we collect sensitive information (such as personally
        identifiable information), that information is encrypted and transmitted
        to us in a secure way. You can verify this by looking for a lock icon in
        the address bar and looking for "https" at the beginning of the address
        of the Web page.
        <br />
      </Text>
      <Text>
        While we use encryption to protect sensitive information transmitted
        online, we also protect your information offline. Only employees who
        need the information to perform a specific job (for example, billing or
        customer service) are granted access to personally identifiable
        information. The computers/servers in which we store personally
        identifiable information are kept in a secure environment.
        <br />
      </Text>
      <Text>
        If you feel that we are not abiding by this privacy policy, you should
        contact us immediately via email at closing@expetitle.com.
        <br />
      </Text>
    </PrivacyText>
  );
}
