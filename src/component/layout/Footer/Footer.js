import { Container, Typography } from "@material-ui/core";

function Footer() {
  return (
    <Container style={{ paddingBottom: "32px" }}>
      <hr />
      <Typography variant="caption" color="textSecondary">
        Copyright ©2021 Barak and Bobsi, LLC B&B® Self-help services may not be
        permitted in all states. The information provided on this site is not
        legal advice, does not constitute a lawyer referral service, and no
        attorney-client or confidential relationship is or will be formed by use
        of the site. The attorney listings on this site are paid attorney
        advertising. In some states, the information on this website may be
        considered a lawyer referral service. Please reference the Terms of Use
        and the Supplemental Terms for specific information related to your
        state. Your use of this website constitutes acceptance of the Terms of
        Use, Supplemental Terms, Privacy Policy and Cookie Policy. Do Not Sell
        My Personal Information
        <br />
        <br />
        Powerline photo by Ventill8 Productions from Pexels.
      </Typography>
    </Container>
  );
}

export default Footer;
