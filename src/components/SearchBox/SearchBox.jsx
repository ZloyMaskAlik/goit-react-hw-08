import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../redux/filtersSlice';

import css from './SearchBox.module.css';

export default function SearchBox(){
  const value = useSelector(selectNameFilter) || '';
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div className={css.wrapper}>
      <label className={css.label} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        autoComplete="off"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};