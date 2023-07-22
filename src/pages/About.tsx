import openBook from  '../assets/images/open-book.jpg'

function About() {
  return (
    <div className='flex justify-between '>
      <p className='font-serif flex-auto m-20 lg:text-4xl md:text-2xl sm:text-sm self-center text-purple-800'>This project mimics a library database. The dashboard contains the library database. Featured contains a few books I have enjoyed at some point in the past.</p>
      <div className='flex-auto'>
        <img src={openBook}  alt="" />
      </div>
    </div>
  )
}

export default About
