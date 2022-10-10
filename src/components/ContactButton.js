const ContactButton = ({
  title,
  color,
  backgroundColor,
  fa_class,
  link = '#',
}) => {
  const style = { color: color, backgroundColor: backgroundColor };
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <button className='contact-btn' style={style}>
        <i className={fa_class} style={{ padding: '8px' }}></i>
        {title}
      </button>
    </a>
  );
};

export default ContactButton;
