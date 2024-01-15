import LoaderImg from "../../assets/loader_icon_128824.png"
import "./Loader.css"

function Loader() {
  return (
    <div className='loader flex flex-c'>
    <img src = {LoaderImg} alt = "loader" />
  </div>  
  )
}

export default Loader