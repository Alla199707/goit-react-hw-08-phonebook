import { Title } from 'components/Container/Container.styled';
import { Container } from 'components/Container/Container.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const contactsList2 = useSelector(selectIContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />

      {/* {contactsList2.length === 0 ? (
        console.log('There are no contacts.')
      ) : (
        <ContactList />
      )} */}
      <ContactList />
      {isLoading && !error && <Loader />}
    </Container>
  );
}
