import Content from "../../common/bulma/elements/Content";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Content options="has-text-centered">
        <p>Sierra Nevada Western Airways &copy; {year} All Rights Reserved.</p>
      </Content>
    </footer>
  );
};

export default Footer;
