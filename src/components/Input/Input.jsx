import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoWrapper = styled.div`
  background: #262626;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  height: 54px;
  border: ${(props) => (props.isActive ? '1px #9747FF solid' : '0px')};
`;

const TodoInput = styled.input`
  color: ${(props) => (props.isActive ? '#F2F2F2' : '#808080')};
  background:transparent;
  padding: 16px;
  width: 100%;
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;

export default function Input({ todo: { id, placeholder, text } }) {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <TodoWrapper isActive={isActive}>
      <TodoInput
        isActive={isActive}
        placeholder={placeholder}
        type="text"
        name="todo-input"
        id={`todoTask-${id}`}
        value={text}
        onFocus={() => { setIsActive(true); }}
        onBlur={() => { setIsActive(false); }}
      />
    </TodoWrapper>
  );
}

Input.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),

};

Input.defaultProps = {
  todo: {
    id: '1',
    placeholder: 'Placeholder',
    text: 'Input text',
  },
};
