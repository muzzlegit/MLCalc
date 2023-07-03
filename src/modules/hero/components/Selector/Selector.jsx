const Selector = ({ filterKey, title, defaultValue, list, handleSelector }) => {
  return (
    <div>
      <label>{title}</label>
      <select
        disabled={!list || !list.length}
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
