import { Duration } from 'date-fns';
import dateAdd from 'date-fns/add';

interface IArgs {
    date: Date;
    duration: Duration;
}

export const addDate = ({ date, duration }: IArgs) => (
    dateAdd(date, duration)
);
