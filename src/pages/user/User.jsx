import './User.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    CalendarToday, 
    PermIdentity,
     PhoneAndroid,
      MailOutline,
      LocationSearching, 
      Publish 
    } from "@material-ui/icons";

function User() {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Create</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img
                        src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                        alt='roshan'
                        className='userShowImg'
                      />
                      <div className='userShowTopTitle'>
                          <span className='userShowUsername'>Anna Becker</span>
                          <span className='userShowUserTitle'>Software Engineer</span>
                      </div>
                    </div>
                    <div className='userShowBotton'>
                        <span className='usershowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>Annabeck99</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>10.12.1999</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon'/>
                            <span className='userShowInfoTitle'>+1 123 456 67</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className='userShowIcon' />
                            <span className='userShowInfoTitle'>annabeck99@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>New York</span>
                        </div>
                    </div>
                    </div>
                    <div className='userUpdate'>
                        <span>User Update Title</span>
                         <form className='userUpdateForm'>
                            <div className='userUpdateLeft'>
                                <div className='userUpdateItem'>
                                    <label>Username</label>
                                    <input 
                                     type='text'
                                     placeholder='DahalAdmin' 
                                     className='userUpdateInput' 

                                     />
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Full Name</label>
                                    <input
                                     type='text'
                                     placeholder='Roshan Dahal'
                                     className='userUpdateInput'
                                       />
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Email</label>
                                    <input 
                                    type='text' 
                                    placeholder='roshandahal747@gmail.com'
                                    className='userUpdateInput'
                                    />
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Phone</label>
                                    <input 
                                    type='text' 
                                    placeholder='+1 720 530 6110'
                                    className='userUpdateInput'
                                    />
                                </div>
                                <div className='userUpdateItem'>
                                    <label>Address</label>
                                    <input 
                                    type='text' 
                                    placeholder='Colorado | USA'
                                    className='userUpdateInput'
                                    />
                                </div>
                            </div>
                            <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                    <img
                                    className='userUpdateImg'
                                    src='https://media-exp1.licdn.com/dms/image/C5603AQGlJfPN0Wu88w/profile-displayphoto-shrink_200_200/0/1627602129072?e=1637798400&v=beta&t=Xmd6QGwBTzDo2AAzea2SoJjfSMlNlCTPR2BjJhCqM-s'
                                    alt=''
                                    />
                                    <label htmlFor='file'>
                                        <Publish className='userUpdateIcon' />
                                    </label>
                                    <input type='file' id='file' style={{ display: 'none'}} />
                                </div>
                                <button className='userUpdateButton'>Update</button>
                            </div>
                        </form> 
                </div>
            </div>
        </div>
    )
}

export default User;
