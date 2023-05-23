const ContactItem = ({ contacts: { name, number } }) => {
  return (
    <>
      <span> {name} : </span>
      <span>{number} </span>
    </>
  );
};

export default ContactItem;
