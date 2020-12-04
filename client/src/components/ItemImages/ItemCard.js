function ItemCard(props) {
  return(
    <li>
      <img src={ props.img } alt={ props.name } />
      <p>{ props.name }</p>
      <p>{ `$${props.price} (each)` }</p>
    </li>
  );
}

export default ItemCard;