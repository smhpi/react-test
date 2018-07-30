import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

function ListPagination(props){
    return(
        <Pagination
        activePage={props.activePage}
        first
        items={props.items}
        last
        maxButtons={5}
        next
        onSelect={props.onSelect}
        prev />
    );
}

ListPagination.propTypes = {
    
    activePage: PropTypes.arrayOf(PropTypes.number).isRequired,
    items: PropTypes.arrayOf(PropTypes.number).isRequired,
    onSelect: PropTypes.arrayOf(PropTypes.func).isRequired
  };
  
  ListPagination.defaultProps = {
    activePage: 1,
    items: 1,
    onSelect: () => {}
  };
  
  export default ListPagination;
