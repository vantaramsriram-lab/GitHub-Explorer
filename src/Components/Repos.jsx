import { useEffect } from 'react'
const Repos = ({repos}) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("opacity-100", "translate-y-0")
        else {
          entry.target.classList.remove("opacity-100", "translate-y-0")
        }
      })
    })
    const elements = document.querySelectorAll(".my-repo")
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [repos])

  return (
    <div className='flex flex-col gap-5 items-center mt-10 w-full mb-20'>
      {repos.length > 0 ? (
        repos.map((repo) => (
          <div key={repo.id} className='my-repo opacity-0 translate-y-10 transition-all duration-1000 sm:w-1/2 w-7/8 flex flex-col justify-center rounded-2xl min-h-50 p-5 bg-gradient-to-b from-white to-pink-200 text-black gap-3'>
            <div className='sm:flex-row sm:justify-between flex flex-col gap-2'>
              <div className='flex gap-3'>
                <div class="w-2 h-8 bg-gradient-to-b from-purple-600 to-pink-400 rounded-full"></div>
                <h2 className='sm:text-2xl text-lg max-[300px]:text-[16px] w-full font-bold'>{repo.name}</h2>
              </div>
              <p className='text-lg font-semibold' >{repo.private ? "Private" : "Public"}</p>
            </div>
            <p>{repo.description}</p>
            <p className='font-semibold'>{repo.language}</p>
            <button className='bg-purple-500 text-white p-2 rounded-xl w-fit'><a href={repo.html_url}>{repo.name}</a></button>
          </div>)
          )
  ) : (
    <div>No repo found</div>
  )}
    </div>
  )
}

export default Repos
