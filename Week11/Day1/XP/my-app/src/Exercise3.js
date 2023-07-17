import './Exercise3.css'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise = (props) => {
    return(
        <>
        <h1 style={style_header}>This is a Header</h1>
        <p className='para'>This is a Paragraph</p>
        <a href='#'>This is a link</a>
        <p>This is a form </p>
        <form>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
        </form>
        <p>Here is an image</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScRETwhYF8NROR0T34Pfou-LHRONO3d_XZtQ&usqp=CAU' alt=''/>
        <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
        </>
        
    )
}

export default Exercise