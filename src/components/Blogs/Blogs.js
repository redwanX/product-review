import React from 'react'

const Blogs = () => {
  return (
    <div className='w-5/6 mx-auto'>
       <article className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>{`What is context API?`}</h1>
        <p className=' text-gray-600 font-bold text-justify italic py-5'>{`If we need to send data form parent element to child elements, we need to send it by props to child elements . But suppose one element on level 1 and another element on level 5 of component tree then If we need to send data from level 1 to level 5 we need to send data via level 2,3,4. But those component don’t require that data. So why should we pass data via them! In this situation we use context API. In context API we create a state on top level . we can access that data from any child components no matter in which level it is without passing data with props .`}</p>
      </article>
       <article className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>{`What is Semantic tag?`}</h1>
        <p className=' text-gray-600 font-bold text-justify italic py-5'>{`semantic tags is self-explaining or which can describe their purpose. Means human or machine can easily understand what is happening in this tag . For example <nav> is a semantic tag and <div> is non semantic tag. We can tell easily by <nav> tag name that this element contain navigation information of a website. But we can’t tell what  <div> element contain with its tag name. Semantic tags provide you more readability of your code and provide additional information of your website. Semantic tags also helps in SEO as Semantic tags make it easier for machine to read your code.`}</p>
      </article>
       <article className=' shadow-lg p-5 rounded'>
        <h1 className=' text-teal-600 text-2xl font-bold '>{`Difference between inline, block, inline-block?`}</h1>
        <p className=' text-gray-600 font-bold text-justify italic py-5'>{`Inline, block and inline-block  are the display value of HTML. If we create two block element they will appear one below the other means in new line. Block elements always take full width. Unlike block element inline element doesn’t start in new line . If we create two inline element they will appear side by side . inline elements doesn’t take full width. In inline elements you can’t set width and height and can’t add padding/margin to top and bottom. We can do this things in inline-block elements. Like inline elements If we create two inline-block element they will appear side by side.`}</p>
      </article>
    </div>

  )
}

export default Blogs