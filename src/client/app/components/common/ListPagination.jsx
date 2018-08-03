import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/lib/Pagination';
//import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';

let itemss = [];

function ListPagination(props) {
    for (let number = 1; number <= 3; number++) {
        itemss.push(
          <Pagination.Item active={ number === props.active} >{number}</Pagination.Item>
        );
      }
    return (
        
        <Pagination  bsSize="medium"  onClick={props.onClick}>
            <Pagination.First />
            <Pagination.Prev />
                {itemss}
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    );
  }

ListPagination.propTypes = {
    active: PropTypes.number.isRequired,
    items: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
  };
  
  ListPagination.defaultProps = {
    active: 1,
    items: 1,
    onClick: () => {}
  };

  export default ListPagination;
