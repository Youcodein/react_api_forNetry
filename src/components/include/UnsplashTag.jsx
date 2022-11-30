import React from 'react'

const UnsplashTag = ({onSearch}) => {

  const onClick1 = () => {
    onSearch("spring");
  };
  const onClick2 = () => {
    onSearch("summer");
  };
  const onClick3 = () => {
    onSearch("fall");
  };
  const onClick4 = () => {
    onSearch("winter");
  };
  const onClick5 = () => {
    onSearch("sky");
  };
  const onClick6 = () => {
    onSearch("space");
  };
  const onClick7 = () => {
    onSearch("green");
  };
  const onClick8 = () => {
    onSearch("sea");
  };

  return (
    <section className='unsplash__tag'>
      <div className="container">
        <div className="unsplash__tag__inner">
          <button type='submit' onClick={onClick1}>spring</button>
          <button type='submit' onClick={onClick2}>summer</button>
          <button type='submit' onClick={onClick3}>fall</button>
          <button type='submit' onClick={onClick4}>winter</button>
          <button type='submit' onClick={onClick5}>sky</button>
          <button type='submit' onClick={onClick6}>space</button>
          <button type='submit' onClick={onClick7}>green</button>
          <button type='submit' onClick={onClick8}>sea</button>
        </div>
      </div>
    </section>
  )
}

export default UnsplashTag