export interface IOption {
	value: string;
	label: string;
	increase: boolean;
}

export const options: IOption[] = [
	{
		value: 'title',
		label: 'Название',
		increase: true
	},
	{
		value: 'title',
		label: 'Название',
		increase: false
	},
	{
		value: 'price',
		label: 'Цена',
		increase: true
	},
	{
		value: 'price',
		label: 'Цена',
		increase: false
	}
]