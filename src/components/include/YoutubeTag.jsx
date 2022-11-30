import React from 'react'

const YoutubeTag = ({onSearch}) => {

  const onClick1 = () => {
    onSearch("playlist");
  };
  const onClick2 = () => {
    onSearch("disney");
  };
  const onClick3 = () => {
    onSearch("ghibli");
  };
  const onClick4 = () => {
    onSearch("animal");
  };
  const onClick5 = () => {
    onSearch("cute");
  };
  const onClick6 = () => {
    onSearch("cook");
  };
  const onClick7 = () => {
    onSearch("sea");
  };
  const onClick8 = () => {
    onSearch("space");
  };
  return (
    <section className='youtube__tag'>
      <div className="container">
        <div className="youtube__tag__inner">
          <button type='submit' onClick={onClick1}>playlist</button>
          <button type='submit' onClick={onClick2}>disney</button>
          <button type='submit' onClick={onClick3}>ghibli</button>
          <button type='submit' onClick={onClick4}>animal</button>
          <button type='submit' onClick={onClick5}>cute</button>
          <button type='submit' onClick={onClick6}>cook</button>
          <button type='submit' onClick={onClick7}>sea</button>
          <button type='submit' onClick={onClick8}>space</button>
        </div>
      </div>
    </section>
  )
}

export default YoutubeTag