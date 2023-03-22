import moment from 'moment';

export const getMoviesMDY = (date) => {
  return moment(date).format('MMMM D YYYY');
};
