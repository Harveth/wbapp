import './menuCard.css'
const Menucard = (props) =>{

    return(
        <section className="menuu wrapper" id="menuu">
        <div className="box-container">
          <div className="box" style={{ backgroundColor: 'rgb(0, 0, 0,0.7)' }}>
            <div className="image">
              {//<img style={{ maxWidth: '100%' }} src={require("../../Assets/Images/Appetizers/ChickenDynamite.jpg")}></img>
              }
            </div>
            <div className="content">
              <h3>Name</h3>
              <p>Description</p>
              <p className="price">89.9</p>
              <button className="btn" style={{ backgroundColor: '#5e503f' }} onClick={() => this.addToCart(1)}>Add To Cart</button>
            </div>
        
          </div>
        </div>
        </section>
    );
}

export default Menucard;