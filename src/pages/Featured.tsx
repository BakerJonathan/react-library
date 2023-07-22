import narnia from  '../assets/images/narnia.jpg'
import hobbit from '../assets/images/hobbit.jpg'

function Featured() {
  return (
    <div className='flex flex-col justify-between '>
      <div className='flex flex-row'>
        <p className='font-serif flex-auto m-20 lg:text-4xl md:text-2xl sm:text-sm self-center text-purple-800'>The first book I'll talk about is Charlie Bone. Charlie Bone is a story about kids with powers, and their school life at Bloor's Academy. The school has primarily normal students, and thus the main cast winds up somewhat ostracized. </p>
        <p className='font-serif flex-auto m-20 lg:text-4xl md:text-2xl sm:text-sm self-center text-purple-800'>As for Narnia, it follows young siblings who discover a closet leading to another world. It's a fantasy world, thus filled with different species like dwarves. The overarching story has messianic parallels. </p>

        <div className='flex-auto self-center'>
          <img src={narnia}  alt="" />
        </div>
      </div>

      <div className='flex flex-row'>
        <div className='flex-auto self-center'>
          <img src={hobbit}  alt="" />
        </div>
        <p className='font-serif flex-auto m-20 lg:text-4xl md:text-2xl sm:text-sm self-center text-purple-800'>There's a bit of a running theme of fantasy books here, and the hobbit continues that. It follows Bilbo Baggins, who is somewhat forced on an adventure with dwarves and gandalf. </p>
        <p className='font-serif flex-auto m-20 lg:text-4xl md:text-2xl sm:text-sm self-center text-purple-800'>Lastly I'll mention The Lightning Thief. Alongside fantasy I enjoyed (and enjoy) mythology. The Lightning Thief follows Percy Jackson, a kid who discovers he's of greek god lineage. It takes place in modern America.</p>

      </div>


    </div>
  )
}

export default Featured
