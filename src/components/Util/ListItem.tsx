type ListItemProps = {
  itemValue: string;
  itemName: string;
  clickHandler: (e: React.MouseEvent<HTMLLIElement>) => void;
};

const ListItem = ({ itemValue, clickHandler, itemName }: ListItemProps) => {
  return (
    <li
      className='font-extralight px-4 py-2 text-gray-50 hover:bg-gray-800'
      value={itemValue}
      onClick={clickHandler}
    >
      {itemName}
    </li>
  );
};

export default ListItem;
