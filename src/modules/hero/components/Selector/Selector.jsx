const Selector = ({ filterKey, title, defaultValue, list, value, handleSelector }) => {
  return (
    <div>
      <label>{title}</label>
      <select
        disabled={!list || !list.length}
        value={value}
        onChange={e => {
          handleSelector(e.target.value, filterKey);
        }}
      >
        <option value="">--- {defaultValue} ---</option>
        {list?.map(item => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Selector;
