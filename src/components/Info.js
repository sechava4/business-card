import ContactButton from './ContactButton';

const Info = () => {
  return (
    <>
      <img
        className='profile-image'
        src={process.env.PUBLIC_URL + '/img/profile-image.jpeg'}
        alt='profile-pic'
      ></img>
      <h1 className='profile-name'>Santiago Echavarria</h1>
      <h1 className='profession'>Fullstack developer</h1>
      <p className='website-link'>santiago.website</p>
      <div className='main-contact'>
        <ContactButton
          title='Email'
          color='black'
          backgroundColor='white'
          fa_class='fa fa-envelope'
        ></ContactButton>
        <ContactButton
          title='LinkedIn'
          color='white'
          backgroundColor='#5093E2'
          fa_class='fa fa-linkedin'
          link='https://www.linkedin.com/in/santiagoechavarria/'
        ></ContactButton>
      </div>
    </>
  );
};

export default Info;
