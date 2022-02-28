import { useDispatch } from "react-redux";
import { deleteEntry } from "../actions/Actions";
import './Entry.css';
import { IoTrashBin } from 'react-icons/io5';

const Entry = (props) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEntry(props.entry.id));
  };
  return (
    <div className="itemlist">
      <div className="">{props.entry.item}</div>
      <div className="">{props.entry.calories} kcal</div>
      <button className="btn-close" onClick={handleDelete}><IoTrashBin /></button>
    </div>
  );
};
export default Entry;