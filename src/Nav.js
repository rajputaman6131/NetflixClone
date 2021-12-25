import React,{useState,useEffect} from 'react'

function Nav() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll');
        }
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix logo" />

            <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" className="nav_avtar" />
        </div>
    )
}

export default Nav
