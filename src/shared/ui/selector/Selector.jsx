import PropTypes from "prop-types";
import { nanoid } from "nanoid";

const Selector = ({ checker, valuesArray, onRaceChange, styles }) => {
  const { SelectorBox, SelectorLabel, Select, Option } = styles;

  return (
    <SelectorBox>
      <SelectorLabel>Расса</SelectorLabel>
      <Select id="race" onChange={onRaceChange}>
        {valuesArray.map(item => {
          return (
            <Option selected={checker === item.value} key={nanoid()} value={item.value}>
              {item.name}
            </Option>
          );
        })}
      </Select>
    </SelectorBox>
  );
};

export default Selector;

Selector.propTypes = {
  valuesArray: PropTypes.array.isRequired,
  onRaceChange: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
};
