import { useDispatch } from 'react-redux';
import { AppDispatch } from 'reduxStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
