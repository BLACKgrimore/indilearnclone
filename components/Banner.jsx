import React from 'react'

const Banner = () => {
  return (
    <section id='section' className='container px-5 bg-dark text-white text-center py-14 rounded-[1rem]'>
      <h2 className='primary font-medium text-[1.8rem] mb-6'>Join us</h2>
      <h3 className='lg:w-[40vw] w-auto leading-10 mb-8'>Join Us by Following Our Socials or Drop a Message</h3>
      <p className='lg:w-[40vw] w-auto mb-6'>Ready to embark on a transformative journey in engineering education? Join the vibrant community of learners at IndiLearn and unlock a world of opportunities.</p>
      <div className='flex justify-center gap-4'>
        <button className='btn'><a href="https://www.instagram.com/indilearn.in/" target='_blank' className='text-[0.8rem]'>Follow Us</a></button>
        <button className='btn'><a href="/contact" className='text-[0.8rem]'>Send a Hi!</a></button>
      </div>
    </section >
  )
}

export default Banner