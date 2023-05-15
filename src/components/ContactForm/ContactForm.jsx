import React, { useState } from 'react';
import { Forma, Label, Button, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContactItem } from 'redux/operations';
import { selectIContacts } from 'redux/selectors';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectIContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const addNewContact = {
      id: nanoid(),
      name,
      number,
    };
    handleCheck(addNewContact);
    setName('');
    setNumber('');
  };

  const handleCheck = addNewContact => {
    contacts.find(
      contact => contact.name.toLowerCase() === addNewContact.name.toLowerCase()
    )
      ? alert(`${name}is already in contacts.`)
      : dispatch(addContactItem(addNewContact));
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const nameId = nanoid();

  //   const userContacts = {
  //     id: nameId,
  //     name,
  //     number,
  //   };

  //   clearData();

  //   handleCheck(userContacts);
  // };

  // const clearData = () => {
  //   setName('');
  //   setNumber('');
  // };

  // const handleCheck = obj => {
  //   const contactsName = contacts.map(contact => contact.name);
  //   if (contactsName.includes(obj.name)) {
  //     alert(`${obj.name} is already in contacts.`);
  //     return;
  //   }

  //   dispatch(addContactItem(obj));
  // };

  return (
    <Forma onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button>Add contact</Button>
    </Forma>
  );
}
// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
export default ContactForm;
