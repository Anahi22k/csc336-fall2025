import "./ListItem.css"


function ListItem({ item }) {
  return (
    <li className="list-item">

      {item.text}
    </li>
  )
}

export default ListItem
