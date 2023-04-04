import * as React from 'react';
import './Pagination.scss'

interface IPaginationProps {
	pageNumbers: number[];
	currentPage: number;
	className: string;
	onClick: (number:number) => void;
}

const Pagination: React.FunctionComponent<IPaginationProps> = ({pageNumbers, currentPage, className, onClick}) => {
  return (
		<div className={'pagination'}>
			{pageNumbers.map((number) => (
				<div key={number} onClick={() => onClick(number)} className={['pagination__link', currentPage === number ? 'pagination__link_active': ''].join(' ')}>
					{number}
				</div>
			))}
		</div>
  ) ;
};

export default Pagination