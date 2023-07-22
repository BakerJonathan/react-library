import libraryBg from  '../assets/images/library-bg.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ libraryBg })`}}  className='flex justify-center  bg-cover bg-fixed'>
      <div className='flex place-items-center h-screen'>
        <h3 className='p-5 bg-black bg-opacity-50 text-white rounded-xl text-3xl font-bold'>Beware of Libraries</h3>
      </div>
  </div>
  )
}

export default Home
