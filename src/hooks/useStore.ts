import {
	TypedUseSelectorHook,
	useDispatch as useDispatchBase,
	useSelector as useSelectorBase
} from 'react-redux';
import type { RootState, AppDispatch } from 'store/index.ts';

export const useAppDispatch = () => useDispatchBase<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelectorBase;
