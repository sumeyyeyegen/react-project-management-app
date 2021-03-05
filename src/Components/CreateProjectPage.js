import React from 'react';
import img1 from '../assets/Images/user.png';

const CreateProjectPage = () => {
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    console.log(name + " " + surname);
    return (
        <div className="container">
            <div className="grid">
                <div className="userInfo">
                    <img src={img1} style={{ height: '40%' }} alt="" />
                    <div>
                        {name}   {surname}
                    </div>
                </div>
            Deneme
        </div>
        </div>
    );
};

export default CreateProjectPage;
