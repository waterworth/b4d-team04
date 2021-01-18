function ItemList() {
  return(
    <ul className="item-list">
      <li className="item-list__card">
        <img className="item-list__img" src='/images/gala.png' alt='gala apples' />
        <p className="item-list__text">Gala Apples</p>
        <p className="item-list__text">$0.79 (each)</p>
      </li>

      <li className="item-list__card">
        <img className="item-list__img" src='/images/golden-delicious.png' alt='golden delicious apples' />
        <p className="item-list__text">Golden Delicious Apples</p>
        <p className="item-list__text">$0.89 (each)</p>
      </li>

      <li className="item-list__card">
        <img className="item-list__img" src='/images/honeycrisp.png' alt='honeycrisp apples' />
        <p className="item-list__text">Honeycrisp Apples</p>
        <p className="item-list__text">$0.99 (each)</p>
      </li>
    </ul>
  );
}

export default ItemList;