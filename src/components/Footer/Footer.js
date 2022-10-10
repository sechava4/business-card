import SocialMediaLogo from './SocialMediaLogo';

const Footer = () => {
  return (
    <div className='footer-container'>
      <footer className='footer'>
        <div className='social'>
          <a href='#'>
            <i className='fa fa-twitter'></i>
          </a>
          <a href='#'>
            <i className='fa fa-facebook'></i>
          </a>
          <a href='#'>
            <i className='fa fa-instagram'></i>
          </a>
          <a href='#'>
            <i className='fa fa-github'></i>
          </a>
        </div>

        {/* <SocialMediaLogo fa_class={'fa fa-twitter'}></SocialMediaLogo>
      <SocialMediaLogo fa_class={'fa fa-facebook'}></SocialMediaLogo>
      <SocialMediaLogo fa_class={'fa fa-instagram'}></SocialMediaLogo>
      <SocialMediaLogo fa_class={'fa fa-github'}></SocialMediaLogo> */}
      </footer>
    </div>
  );
};

export default Footer;
