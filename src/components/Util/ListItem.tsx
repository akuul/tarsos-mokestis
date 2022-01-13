type ListItemProps = {
  itemValue: string;
  itemName: string;
  clickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const ListItem = ({ itemValue, clickHandler, itemName }: ListItemProps) => {
  return (
    <li value={itemValue} onClick={clickHandler}>
      {itemName}
    </li>
  );
};

export default ListItem;
