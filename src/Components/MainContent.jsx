import React, { useState, useContext, useEffect } from 'react'
import Repos from './Repos';
import Profile from './Profile'
import Loading from './Loading';
import ValueContext from '../context/Context';
import { getRepos, getProfile } from '../apifiles/github';
const MainContent = () => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)
  const [profile, setProfile] = useState(null)
  const username = useContext(ValueContext)
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function gettingRepos() {
      setLoading(true)
      setError('')
      try {
        const data = await getRepos(username)
        setRepos(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    gettingRepos();

    async function gettingProfile() {
      const data = await getProfile(username)
      setProfile(data)
    }
    gettingProfile();
  }, [username])
  return (
    <>
      {loading ? (<Loading />) :
        (error == '' ? (
          <div>
            <Profile profile ={profile}/>
            <div>
              <h2 className='text-center sm:text-4xl text-2xl font-bold mt-10'>Repos</h2>
            </div>
            <div >
              <Repos repos={repos} />
            </div>
          </div>) : (
          <div className='mt-20 flex justify-center'>
            <p className='text-3xl font-bold'>{error}</p>
          </div>
        )
        )
      }
    </>

  )
}

export default MainContent
