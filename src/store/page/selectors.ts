import { useSelector } from 'react-redux';
import { PageState } from './slice';

export const usePageState: () => {
	page: PageState;
} = () => {
	return useSelector((state: { page: PageState }) => state);
};
