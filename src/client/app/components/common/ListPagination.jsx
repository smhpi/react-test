import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/lib/Pagination';
//import { createUltimatePagination, ITEM_TYPES } from 'react-ultimate-pagination';

let itemss = [];

function ListPagination(props) {
    let items = props.items;
    for (let number = 1; number <= items ; number++) {
        itemss.push(
          <Pagination.Item active={ number === props.active} onSelect={props.onSelect}>{number}</Pagination.Item>
        );
      }
    return (
        
        <Pagination  bsSize="medium"  >
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
    onSelect: PropTypes.func.isRequired
  };
  
  ListPagination.defaultProps = {
    active: 1,
    items: 1,
    onSelect: () => {}
  };

  export default ListPagination;
