import { deleteContactItem, fetchContacts } from 'redux/contacts/operations';
import ContactItem from '../ContactItem/ContactItem';
import { List, Button, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilters,
  selectIContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const ContactList = () => {
  const contacts = useSelector(selectIContacts);
  const filter = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const getFilterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };

  const filterContacts = getFilterContacts();
  // const normalizedFilter = filter.toLowerCase();

  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {filterContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactItem contacts={contact} />
            <Button onClick={() => dispatch(deleteContactItem(contact.id))}>
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ContactList;
