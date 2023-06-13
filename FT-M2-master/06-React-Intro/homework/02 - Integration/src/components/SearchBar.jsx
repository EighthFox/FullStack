export default function SearchBar(props) {
   const id = props.id;
   return (
      <div>
         <input type='search' id='search'/>
         <button onClick={() => {props.onSearch(document.getElementById("search").value)}}>Agregar</button>
      </div>
   );
}
