//STYLES
import { Container, Label, Select, Option } from "./styles/Selector.styled";

const Selector = ({ filterKey, title, defaultValue, list, value, handleSelector }) => {
  return (
    <Container isActive={list ? "active" : null}>
      <Label>{title}</Label>
      <Select
        disabled={!list}
        value={value}
        onChange={e => {
          handleSelector(e.target.value, filterKey);
        }}
      >
        <Option value="">- {defaultValue} -</Option>
        {list?.map(item => {
          return (
            <Option key={item} value={item}>
              {item}
            </Option>
          );
        })}
      </Select>
    </Container>
  );
};

export default Selector;
