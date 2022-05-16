import Entry from './EntryItem';
import styles from './EntryList.css';
import { useEntries } from '../../context/PlannerContext';

export default function Entries() {
  // TODO: Replace with the entries stored in PlannerContext
  // const entries = [
  //   {
  //     id: 0,
  //     title: 'Start Planning',
  //     content: 'I should write in my planner',
  //     date: parseDate(new Date()),
  //   },
  // ];
  const { entries } = useEntries();

  return (
    <ul className={styles.list}>
      {entries.map(({ id, title, date }) => (
        <Entry key={id} id={id} title={title} date={date} />
      ))}
    </ul>
  );
}
