import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filters/selectors';
import { changeFilter } from '../../redux/filters/slice';

import css from './SearchBox.module.css';

export default function SearchBox () {
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