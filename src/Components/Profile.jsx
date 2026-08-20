import React from "react"
const Profile = ({profile}) => {
  return (
    <div className='flex justify-center w-full mt-10'>
      {profile ? (
        <div className='md:w-3/4 sm:w-3/4 w-7/8 min-h-50 flex min-[400px]:flex-row flex-col  gap-5 border border-white/30 bg-white/10 p-4 rounded-2xl backdrop-blur-sm hover:-translate-y-1 hover:scale-[1.01] transition-all duration-100' >
          <img src={profile.avatar_url} alt="" className='sm:w-30 sm:h-30 w-20 h-20 rounded-full' />
          <div className='flex flex-col gap-2'>
            <h2 className='sm:text-3xl text-2xl font-bold'>{profile.name}</h2>
            <p className='sm:text-lg text-sm'>{profile.bio ? (profile.bio) : ("No-Bio")}</p>
            <div className='sm:flex gap-2 flex flex-col'>
              <div className='flex gap-2 
               max-[350px]:flex-col'>
                <p>Followers</p>
                <p>{profile.followers}</p>
                <p>Repos</p>
                <p>{profile.public_repos}</p>
              </div>
              <button className='bg-purple-500 text-white p-2 rounded-xl self-start'><a href={profile.url}>Github</a></button>
            </div>
          </div>
        </div>
      ) : (
        <div>No profile found</div>
      )
      }
    </div>

  )
}

export default Profile