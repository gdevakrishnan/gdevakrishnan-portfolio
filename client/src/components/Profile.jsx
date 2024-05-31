import React, { Fragment } from 'react'
import devakrishnan_profile from "../assets/devakrishnan_profile.webp"

function Profile() {
  return (
    <Fragment>
        <div className="profile_image">
          <img src={devakrishnan_profile} alt="" className="img" />
        </div>
    </Fragment>
  )
}

export default Profile