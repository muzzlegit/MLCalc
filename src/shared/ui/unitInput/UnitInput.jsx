import PropTypes from "prop-types";

const UnitInput = ({ value, onInput, styles }) => {
  const { Input } = styles;
  return (
    <Input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="0"
      value={value}
      onChange={onInput}
    ></Input>
  );
};

UnitInput.propTypes = {
  value: PropTypes.number.isRequired,
  onInput: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};

export default UnitInput;
