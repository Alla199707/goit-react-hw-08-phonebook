import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts } from 'redux/FilterSlice';
import { selectFilters } from 'redux/selectors';
const Filter = () => {
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();
  const filterContact = e => {
    dispatch(getFilterContacts(e.currentTarget.value.trim()));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input type="text" value={filter} onChange={filterContact} />
      </Label>
    </>
  );
};

export default Filter;
