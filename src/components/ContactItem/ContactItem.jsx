const ContactItem = ({ contacts: { name, phone } }) => {
  return (
    <>
      <span> {name} : </span>
      <span>{phone} </span>
    </>
  );
};

export default ContactItem;
