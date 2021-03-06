import { IconifyLoadIcons } from './loader';
import { IconifyIconName } from '../icon/name';

/**
 * Function to check if icon is pending
 */
export type IsPending = (icon: IconifyIconName) => boolean;

/**
 * API interface
 */
export interface IconifyAPI {
	isPending: IsPending;
	loadIcons: IconifyLoadIcons;
}
